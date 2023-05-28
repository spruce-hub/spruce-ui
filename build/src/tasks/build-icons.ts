import {
  resolve,
  basename,
  gulp,
  rimraf,
  rollup,
  nodeResolve,
  commonjs,
  esbuild,
  camelCase,
  parseJson,
  glob,
  format,
  consola,
  chalk,
  vuePlugin,
  vueJsx,
  readFileSync,
  writeFileSync,
  emptyDir,
  ensureDirSync,
} from '../utils'

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

  const componentName = camelCase(filename, { pascalCase: true })
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

const transformToVueComponent = async () => {
  await rimraf(resolve(iconsRoot, 'dist'))
  await emptyDir(`${iconsRoot}/components`)

  const files = await getSvgFiles()

  files.forEach((file) => {
    const content = readFileSync(file, 'utf-8')
    const { filename, componentName } = getSvgName(file)

    const vue = formatCode(
      `
    <template>
    ${content}
    </template>
    `,
      'vue'
    )

    const index = formatCode(
      `
      import ${componentName} from './${filename}.vue'
      import type { App, Plugin } from 'vue'

      export const ${componentName}Plugin: Plugin = {
        install(app: App) {
          app.component('${componentName}', ${componentName})
        },
      }
      export { ${componentName} }
      `,
      'typescript'
    )
    ensureDirSync(`${iconsRoot}/components/${filename}`)
    writeFileSync(resolve(`${iconsRoot}/components/${filename}`, `${filename}.vue`), vue, 'utf-8')
    writeFileSync(resolve(`${iconsRoot}/components/${filename}`, 'index.ts'), index, 'utf-8')
    consola.success(chalk.green(`SFC: ${chalk.bold(`/components/${filename}/${filename}.vue`)}`))
    consola.success(chalk.green(`SFC: ${chalk.bold(`/components/${filename}/index.ts`)}`))
  })
}

const generateEntry = async () => {
  const files = await getSvgFiles()

  const comp: string[] = []
  const compPlugin: string[] = []
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getSvgName(file)

        comp.push(`${componentName}`)
        compPlugin.push(`${componentName}Plugin`)

        return `import { ${componentName}, ${componentName}Plugin } from './${filename}'`
      })
      .join('\n')
  )

  const index = formatCode(
    `
    ${code}
    export {${comp}}
    export default [${compPlugin}]
    `
  )

  writeFileSync(resolve(`${iconsRoot}/components`, 'index.ts'), index, 'utf-8')
  consola.success(chalk.green(`SVG: ${chalk.bold('/components/index.ts')}`))
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
        extensions: ['.mjs', '.js', '.json', '.ts'],
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
    external: [...Object.keys(pkg.devDependencies || {})],
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

export const buildIcons = series(transformToVueComponent, generateEntry, buildSvgComponent)
