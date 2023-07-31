import {
  resolve,
  basename,
  gulp,
  gulpSass,
  autoprefixer,
  cleanCSS,
  rename,
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
  dartSass,
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
import type { Plugin } from 'rollup'

const { src, dest, series } = gulp
const { cyan, yellow, green } = chalk

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

  files.forEach(async (file) => {
    const content = readFileSync(file, 'utf-8')
    const { filename, componentName } = getSvgName(file)

    const vue = await formatCode(
      `
    <template>
    ${content}
    </template>

    <script lang="ts">
    import type { DefineComponent } from 'vue'
    export default ({
      name: '${componentName}',
    }) as DefineComponent
    </script>
    `,
      'vue',
    )

    const index = await formatCode(
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
      'typescript',
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
  const code = await formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getSvgName(file)

        comp.push(`${componentName}`)
        compPlugin.push(`${componentName}Plugin`)

        return `import { ${componentName}, ${componentName}Plugin } from './${filename}'`
      })
      .join('\n'),
  )

  const index = await formatCode(
    `
    ${code}
    export {${comp}}
    export default [${compPlugin}]
    `,
  )

  writeFileSync(resolve(`${iconsRoot}/components`, 'index.ts'), index, 'utf-8')
  consola.success(chalk.green(`SVG: ${chalk.bold('/components/index.ts')}`))
}

const buildComponent = async () => {
  const bundle = await rollup({
    input: resolve(iconsRoot, 'index.ts'),
    plugins: [
      ((): Plugin => {
        return {
          name: 'alias',
          resolveId(source) {
            let id = ''
            const result = source.startsWith('@icons/styles')
            if (result) {
              id = source.replaceAll('@icons/styles', '@spruce-hub/icons/dist/styles')
            } else {
              return undefined
            }

            return {
              id,
              external: 'absolute',
            }
          },
        }
      })(),
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

const generateGDTS = async () => {
  const files = await getSvgFiles()

  const code = await formatCode(
    files
      .map((file) => {
        const { componentName } = getSvgName(file)

        return `${componentName}: typeof import('@spruce-hub/icons')['${componentName}']`
      })
      .join('\n'),
  )

  const GDTS = await formatCode(
    `
    declare module 'vue' {
      export interface GlobalComponents {
        ${code}
      }
    }
    
    export {}
    `,
    'typescript',
  )

  writeFileSync(resolve(`${iconsRoot}`, 'global.d.ts'), GDTS, 'utf-8')
  consola.success(chalk.green(`GDTS: ${chalk.bold('global.d.ts')}`))
}

const buildStyle = () => {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index|base|component)/

  return src(resolve(iconsRoot, 'styles/*.scss'))
    .pipe(sass.sync({ includePaths: [resolve(iconsRoot, './node_modules')] }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${green('CSS: ')}${cyan(details.name)} => ${yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${green(details.stats.minifiedSize / 1000)} KB`,
        )
      }),
    )
    .pipe(
      rename((path) => {
        if (!noPrefixFile.test(path.basename)) {
          path.basename = `ys-${path.basename}`
        }
      }),
    )
    .pipe(dest(resolve(iconsRoot, 'dist/styles')))
}

const copyScss = () => {
  return src(resolve(iconsRoot, 'styles/**')).pipe(dest(resolve(iconsRoot, 'dist/styles/scss')))
}

export const buildIcons = series(
  transformToVueComponent,
  generateEntry,
  buildComponent,
  generateGDTS,
  buildStyle,
  copyScss,
)
