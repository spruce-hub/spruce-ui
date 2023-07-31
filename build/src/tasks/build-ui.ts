import {
  resolve,
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

import { cuiRoot, euiRoot, muiRoot } from '../utils/paths'

const { src, dest } = gulp

const { cyan, yellow, green } = chalk

const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', '__tests__', 'gulpfile', 'dist', 'global.d.ts', 'env.d.ts']
  return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)))
}

const uiRoots: Record<string, string> = {
  cui: cuiRoot,
  eui: euiRoot,
  mui: muiRoot,
}

export const buildUI = async (lib: string) => {
  const uiRoot = uiRoots[lib]

  await rimraf(resolve(uiRoot, 'dist'))

  const pkgPath = resolve(uiRoot, 'package.json')
  const pkg = parseJson(readFileSync(pkgPath, 'utf-8'))

  const paths = {
    [`@${lib}/components`]: `${uiRoot}/components`,
    [`@${lib}/styles`]: `${uiRoot}/styles`,
    [`@${lib}/utils`]: `${uiRoot}/utils`,
  }

  const buildComponent = async () => {
    const input = excludeFiles(
      await glob('**/*.{ts,vue}', {
        cwd: uiRoot,
        absolute: true,
        onlyFiles: true,
      }),
    )
    const bundle = await rollup({
      input,
      plugins: [
        alias({
          paths,
          exclude: ['@spruce-hub/chalk'],
        }),
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
          tsConfigFilePath: resolve(uiRoot, './tsconfig.json'),
          injectFiles: [resolve(uiRoot, 'components/env.d.ts')],
          paths,
        }),
      ],
      external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})],
      treeshake: false,
    })
    bundle.write({
      format: 'esm',
      dir: resolve(uiRoot, 'dist'),
      preserveModules: true,
      sourcemap: true,
    })
  }

  const buildStyle = () => {
    const sass = gulpSass(dartSass)
    const noPrefixFile = /(index|base|component)/

    return src(resolve(uiRoot, 'styles/*.scss'))
      .pipe(sass.sync({ includePaths: [resolve(uiRoot, './node_modules')] }))
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
      .pipe(dest(resolve(uiRoot, 'dist/styles')))
  }

  const copyScss = () => {
    return src(resolve(uiRoot, 'styles/**')).pipe(dest(resolve(uiRoot, 'dist/styles/scss')))
  }

  return [buildComponent, buildStyle, copyScss]
}
