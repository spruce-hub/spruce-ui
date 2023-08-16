import {
  resolve,
  gulp,
  gulpSass,
  autoprefixer,
  cleanCSS,
  rimraf,
  rollup,
  nodeResolve,
  commonjs,
  esbuild,
  parseJson,
  readFileSync,
  gulpFilter,
  consola,
  chalk,
  dartSass,
} from '../utils'

import { dts } from '../plugins/build-dts'
import { alias } from '../plugins/build-alias'
import { chalkRoot } from '../utils/paths'

const { src, dest } = gulp

const { cyan, yellow, green } = chalk

const pkgPath = resolve(chalkRoot, 'package.json')
const pkg = parseJson(readFileSync(pkgPath, 'utf-8'))

const paths = {
  ['@chalk']: `${chalkRoot}`,
}

export const buildChalk = async () => {
  await rimraf(resolve(chalkRoot, 'dist'))

  const bundle = await rollup({
    input: `${chalkRoot}/index.ts`,
    plugins: [
      alias({
        paths,
        exclude: [],
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'ESNext',
      }),
      dts({
        compilerOptions: {
          emitDeclarationOnly: true,
          preserveSymlinks: true,
          skipLibCheck: true,
          noImplicitAny: false,
        },
        tsConfigFilePath: resolve(chalkRoot, './tsconfig.json'),
        paths: {
          '@chalk': '@spruce-hub/chalk/dist',
        },
      }),
    ],
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.devDependencies || {})],
    watch: {
      exclude: ['./node_modules/**', './dist/**'],
    },
  })
  bundle.write({
    format: 'esm',
    dir: resolve(chalkRoot, 'dist'),
    preserveModules: true,
    sourcemap: true,
  })

  const sass = gulpSass(dartSass)

  const excludeFilter = gulpFilter([resolve(chalkRoot, 'scss/**'), '!mixin.scss'], {
    restore: true,
  })

  return src(resolve(chalkRoot, 'scss/*.scss'))
    .pipe(excludeFilter)
    .pipe(sass.sync({ includePaths: [resolve(chalkRoot, './node_modules')] }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, (details) => {
        consola.success(
          `${green('CHALK: ')}${cyan(details.name)} => ${yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${green(details.stats.minifiedSize / 1000)} KB`,
        )
      }),
    )
    .pipe(dest(resolve(chalkRoot, 'dist')))
}
