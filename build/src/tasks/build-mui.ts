import { resolve } from 'node:path'
import { readFileSync } from 'node:fs'

import { rollup } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'
import dartSass from 'sass'

import parseJson from 'parse-json'
import glob from 'fast-glob'
import chalk from 'chalk'
import consola from 'consola'

import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { dts } from '../plugins/build-dts'
import { alias } from '../plugins/build-alias'

import { muiRoot } from '../utils/paths'

const { src, dest } = gulp

const { cyan, yellow, green } = chalk

const pkgPath = resolve(muiRoot, 'package.json')
const pkg = parseJson(readFileSync(pkgPath, 'utf-8'))

const paths = {
  '@mui/components': '@spruce/mui/dist/components',
  '@mui/styles': '@spruce/mui/dist/styles',
  '@mui/utils': '@spruce/mui/dist/utils',
}

const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', '__tests__', 'gulpfile', 'dist', 'global.d.ts', 'env.d.ts']
  return files.filter((path) => !excludes.some((exclude) => path.includes(exclude)))
}

export const buildMui = async () => {
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
        moduleDirectories: [resolve(muiRoot, 'node_modules')],
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
    external: [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)],
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
          path.basename = `m-${path.basename}`
        }
      })
    )
    .pipe(dest(resolve(muiRoot, 'dist/styles')))
}

export const copyMuiScss = () => {
  return src(resolve(muiRoot, 'styles/**')).pipe(dest(resolve(muiRoot, 'dist/styles/scss')))
}
