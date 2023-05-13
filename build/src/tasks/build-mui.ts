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

import { muiRoot } from '../utils/paths'

const { src, dest } = gulp

const { cyan, yellow, green } = chalk

const pkgPath = resolve(muiRoot, 'package.json')
const pkg = parseJson(readFileSync(pkgPath, 'utf-8'))

const paths = {
  '@mui/components': '@spruce-hub/mui/dist/components',
  '@mui/styles': '@spruce-hub/mui/dist/styles',
  '@mui/utils': '@spruce-hub/mui/dist/utils',
}

const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', '__tests__', 'gulpfile', 'dist', 'global.d.ts', 'env.d.ts']
  return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)))
}

export const buildMui = async () => {
  rimrafSync(resolve(muiRoot, 'dist'))
  const input = excludeFiles(
    await glob('**/*.{ts,vue}', {
      cwd: muiRoot,
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
        modulePaths: [resolve(muiRoot, 'node_modules')],
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
        tsConfigFilePath: resolve(muiRoot, './tsconfig.json'),
        injectFiles: [resolve(muiRoot, 'components/env.d.ts')],
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
    dir: resolve(muiRoot, 'dist'),
    preserveModules: true,
    sourcemap: true,
  })
}

export const buildMuiStyle = () => {
  const sass = gulpSass(dartSass)
  const noPrefixFile = /(index|base|component)/

  return src(resolve(muiRoot, 'styles/*.scss'))
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
          path.basename = `ys-${path.basename}`
        }
      })
    )
    .pipe(dest(resolve(muiRoot, 'dist/styles')))
}

export const copyMuiScss = () => {
  return src(resolve(muiRoot, 'styles/**')).pipe(dest(resolve(muiRoot, 'dist/styles/scss')))
}
