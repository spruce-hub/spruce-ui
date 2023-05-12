import {
  resolve,
  gulp,
  gulpSass,
  autoprefixer,
  cleanCSS,
  rename,
  rimrafSync,
  rollup,
  nodeResolve,
  commonjs,
  esbuild,
  parseJson,
  glob,
  consola,
  chalk,
  dartSass,
  vuePlugin,
  vueJsx,
  readFileSync,
} from '../utils'

import { dts } from '../plugins/build-dts'
import { alias } from '../plugins/build-alias'

import { euiRoot } from '../utils/paths'

const { src, dest } = gulp

const { cyan, yellow, green } = chalk

const pkgPath = resolve(euiRoot, 'package.json')
const pkg = parseJson(readFileSync(pkgPath, 'utf-8'))

const paths = {
  '@eui/components': '@spruce-hub/eui/dist/components',
  '@eui/styles': '@spruce-hub/eui/dist/styles',
  '@eui/utils': '@spruce-hub/eui/dist/utils',
}

const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', '__tests__', 'gulpfile', 'dist', 'global.d.ts', 'env.d.ts']
  return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)))
}

export const buildEui = async () => {
  rimrafSync(resolve(euiRoot, 'dist'))
  const input = excludeFiles(
    await glob('**/*.{ts,vue}', {
      cwd: euiRoot,
      absolute: true,
      onlyFiles: true,
    })
  )

  const bundle = await rollup({
    input,
    plugins: [
      alias(paths),
      vuePlugin({
        isProduction: false,
      }),
      vueJsx(),
      nodeResolve({
        modulePaths: [resolve(euiRoot, 'node_modules')],
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
        tsConfigFilePath: resolve(euiRoot, './tsconfig.json'),
        injectFiles: [resolve(euiRoot, 'components/env.d.ts')],
        paths,
      }),
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})],
    watch: {
      exclude: ['./node_modules/**', './dist/**'],
    },
    treeshake: false,
  })
  bundle.write({
    format: 'esm',
    dir: resolve(euiRoot, 'dist'),
    preserveModules: true,
    sourcemap: true,
  })
}

export const buildEuiStyle = () => {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index|base|component)/

  return src(resolve(euiRoot, 'styles/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${green('CSS: ')}${cyan(details.name)} => ${yellow(
            details.stats.originalSize / 1000
          )} KB -> ${green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(
      rename((path) => {
        if (!noPrefixFile.test(path.basename)) {
          path.basename = `e-${path.basename}`
        }
      })
    )
    .pipe(dest(resolve(euiRoot, 'dist/styles')))
}

export const copyEuiScss = () => {
  return src(resolve(euiRoot, 'styles/**')).pipe(dest(resolve(euiRoot, 'dist/styles/scss')))
}
