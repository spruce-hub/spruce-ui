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

    <script lang="ts">
    import type { DefineComponent } from 'vue'
    export default ({
      name: "${componentName}",
    }) as DefineComponent
    </script>`,
      'vue'
    )
    writeFileSync(resolve(`${iconsRoot}/components`, `${filename}.vue`), vue, 'utf-8')
    consola.success(chalk.green(`SFC: ${chalk.bold(`/components/${filename}.vue`)}`))
  })
}

const generateEntry = async () => {
  const files = await getSvgFiles()
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getSvgName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n')
  )

  writeFileSync(resolve(`${iconsRoot}/components`, 'index.ts'), code, 'utf-8')
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

export const buildIcons = series(
  // formatSVG,
  transformToVueComponent,
  generateEntry,
  buildSvgComponent
)
