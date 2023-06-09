import {
  resolve,
  gulp,
  gulpSass,
  autoprefixer,
  cleanCSS,
  rimraf,
  gulpFilter,
  consola,
  chalk,
  dartSass,
} from '../utils'

import { chalkRoot } from '../utils/paths'

const { src, dest } = gulp

const { cyan, yellow, green } = chalk

export const buildChalk = async () => {
  await rimraf(resolve(chalkRoot, 'dist'))

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
            details.stats.originalSize / 1000
          )} KB -> ${green(details.stats.minifiedSize / 1000)} KB`
        )
      })
    )
    .pipe(dest(resolve(chalkRoot, 'dist')))
}
