import { dirname } from 'node:path'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

import * as sfc from 'vue/compiler-sfc'
import { Project } from 'ts-morph'
import consola from 'consola'
import chalk from 'chalk'

import type { Plugin } from 'rollup'
import type { CompilerOptions, SourceFile } from 'ts-morph'

const { compileScript, parse } = sfc

export interface Options {
  compilerOptions: CompilerOptions
  tsConfigFilePath: string
  injectFiles?: string[]
  paths?: { [key: string]: string }
}

const pathRewriter = (text: string, paths?: { [key: string]: string }) => {
  let result = text
  if (paths) {
    for (const [key, value] of Object.entries(paths)) {
      result = result.replaceAll(key, value)
    }
  }
  return result
}

/**
 * 创建声明文件
 * --
 *
 * @param { Options } options 插件配置
 *
 * @options
 * `compilerOptions` 扩展 tsconfig
 *
 * `tsConfigFilePath` 指定 tsconfig.josn 文件的绝对路径
 *
 * `injectFiles` 注入额外的文件
 *
 * `paths` 重写路径
 */
export const dts = (options: Options): Plugin => {
  const project = new Project({
    compilerOptions: options.compilerOptions,
    tsConfigFilePath: options.tsConfigFilePath,
    skipAddingFilesFromTsConfig: true,
  })

  if (options.injectFiles?.length) {
    options.injectFiles.filter((filePath) => {
      project.addSourceFileAtPath(filePath)
    })
  }

  const sourceFiles: SourceFile[] = []

  return {
    name: 'build-dts',
    async load(id) {
      if (id.endsWith('.vue')) {
        const content = await readFile(id, 'utf-8')
        const hasTsNoCheck = content.includes('@ts-nocheck')

        const sfc = parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content = (hasTsNoCheck ? '// @ts-nocheck\n' : '') + (script?.content ?? '')
          if (scriptSetup) {
            const compiled = compileScript(sfc.descriptor, {
              id: 'xxx',
            })
            content += compiled.content
          }

          const lang = scriptSetup?.lang || script?.lang || 'js'
          const sourceFile = project.createSourceFile(`${id}.${lang}`, content)

          sourceFiles.push(sourceFile)
        }
      } else if (id.endsWith('.ts')) {
        const sourceFile = project.addSourceFileAtPath(id)

        sourceFiles.push(sourceFile)
      }

      const diagnostics = project.getPreEmitDiagnostics()
      if (diagnostics.length > 0) {
        consola.error(project.formatDiagnosticsWithColorAndContext(diagnostics))
        const err = new Error('代码中包含错误的类型声明，终止创建声明文件')
        consola.error(err)
        throw err
      }

      await project.emit({
        emitOnlyDtsFiles: true,
      })

      return null
    },
    buildEnd: () => {
      sourceFiles.length > 0 &&
        sourceFiles.map(async (sourceFile) => {
          const emitOutput = sourceFile.getEmitOutput()
          const emitFiles = emitOutput.getOutputFiles()

          if (emitFiles.length === 0) {
            throw new Error(`创建失败: ${chalk.bold(sourceFile.getFilePath())}`)
          }

          emitFiles.map(async (outputFile) => {
            const filepath = outputFile.getFilePath()
            await mkdir(dirname(filepath), {
              recursive: true,
            })

            await writeFile(filepath, pathRewriter(outputFile.getText(), options.paths), 'utf8')

            consola.success(chalk.green(`DTS: ${chalk.bold(sourceFile.getFilePath())}`))
          })
        })
    },
  }
}
