import { resolve, basename } from 'node:path'

import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

import { rollup } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'

import fse from 'fs-extra'
import camelCase from 'camelcase'
import parseJson from 'parse-json'
import glob from 'fast-glob'
import { format } from 'prettier'
import consola from 'consola'
import chalk from 'chalk'
import { JSDOM } from 'jsdom'
import dartSass from 'sass'

import vuePlugin from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const { readFileSync, writeFileSync, emptyDir, ensureDir, ensureDirSync } = fse

export {
  resolve,
  basename,
  gulp,
  gulpSass,
  autoprefixer,
  cleanCSS,
  rename,
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
  JSDOM,
  dartSass,
  vuePlugin,
  vueJsx,
  readFileSync,
  writeFileSync,
  emptyDir,
  ensureDir,
  ensureDirSync,
}
