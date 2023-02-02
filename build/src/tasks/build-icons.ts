import { basename, resolve } from 'node:path'
import { readFileSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'

import gulp from 'gulp'

import { rollup } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'

import { emptyDir, ensureDir } from 'fs-extra'
import camelcase from 'camelcase'
import parseJson from 'parse-json'
import glob from 'fast-glob'
import { format } from 'prettier'
import consola from 'consola'
import chalk from 'chalk'
import { JSDOM } from 'jsdom'

import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { dts } from '../plugins/build-dts'

import { iconsRoot } from '../utils'

import type { BuiltInParserName } from 'prettier'

const { series } = gulp

const pkgPath = resolve(iconsRoot, 'package.json')
const pkg = parseJson(readFileSync(pkgPath, 'utf-8'))

const getSvgFiles = async (): Promise<string[]> => {
  const files = await glob('svg/*.svg', {
    cwd: iconsRoot,
    absolute: true,
    onlyFiles: true,
  })
  return files
}

const getSvgName = (file: string): { filename: string; componentName: string } => {
  const filename = basename(file).replace('.svg', '')
  const componentName = camelcase(filename, { pascalCase: true })
  return {
    filename,
    componentName,
  }
}

const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const generateEntry = async (files: string[]) => {
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getSvgName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n')
  )
  await writeFile(resolve(`${iconsRoot}/components`, 'index.ts'), code, 'utf-8')
  consola.success(chalk.green(`SVG: ${chalk.bold('/components/index.ts')}`))
}

const formatSVG = async () => {
  const files = await getSvgFiles()

  files.forEach(async (file) => {
    const content = await readFile(file, 'utf-8')
    const { filename } = getSvgName(file)

    const svg = new JSDOM(content)
    const document = svg.window.document

    const svgdom = document.getElementsByTagName('svg')[0]
    const pathdom = document.getElementsByTagName('path')[0]
    const rectdom = document.getElementsByTagName('rect')[0]

    const viewBox = document.getElementsByTagName('svg')[0].getAttribute('viewBox')

    pathdom.setAttribute('fill', 'currentColor')
    pathdom.removeAttribute('id')

    rectdom && svgdom.removeChild(rectdom)

    const pathHTML = svgdom.innerHTML

    const svgElement = formatCode(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${pathHTML}</svg>`,
      'html'
    )

    writeFile(resolve(`${iconsRoot}/svg`, `${filename}.svg`), svgElement, 'utf-8')
    consola.success(chalk.green(`SVG: ${chalk.bold(`/svg/${filename}.svg`)}`))
  })
}

const transformToVueComponent = async () => {
  await ensureDir(`${iconsRoot}/components`)
  await emptyDir(`${iconsRoot}/components`)

  const files = await getSvgFiles()

  files.forEach(async (file) => {
    const content = await readFile(file, 'utf-8')
    const { filename, componentName } = getSvgName(file)
    const vue = formatCode(
      `
    <template>
    ${content}
    </template>

    <script lang="ts">
    import type { DefineComponent } from 'vue'
    export default ({
      name: "${componentName}",
    }) as DefineComponent
    </script>`,
      'vue'
    )
    writeFile(resolve(`${iconsRoot}/components`, `${filename}.vue`), vue, 'utf-8')
    consola.success(chalk.green(`SFC: ${chalk.bold(`/components/${filename}.vue`)}`))
  })

  await generateEntry(files)
}

const buildSvgComponent = async () => {
  const bundle = await rollup({
    input: resolve(iconsRoot, 'index.ts'),
    plugins: [
      vuePlugin({
        isProduction: false,
      }),
      vueJsx(),
      nodeResolve({
        moduleDirectories: [resolve(iconsRoot, 'node_modules')],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'ESNext',
        loaders: {
          '.vue': 'ts',
        },
      }),
      dts({
        compilerOptions: {
          emitDeclarationOnly: true,
          preserveSymlinks: true,
          skipLibCheck: true,
          noImplicitAny: false,
        },
        tsConfigFilePath: resolve(iconsRoot, 'tsconfig.json'),
        injectFiles: [resolve(iconsRoot, 'env.d.ts')],
      }),
    ],
    external: [...Object.keys(pkg.devDependencies)],
    watch: {
      exclude: ['./node_modules/**', './dist/**'],
    },
    treeshake: false,
  })
  bundle.write({
    format: 'esm',
    file: resolve(iconsRoot, 'dist/index.js'),
    sourcemap: true,
  })
}

export const buildIcons = series(formatSVG, transformToVueComponent, buildSvgComponent)
