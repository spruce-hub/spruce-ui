import { argv } from 'node:process'
import gulp from 'gulp'

import { buildChalk, buildHooks, buildIcons, buildUI } from './src'

const { series } = gulp

let tasks

const libNameIndex = argv.indexOf('--lib') + 1

switch (argv[libNameIndex]) {
  case 'chalk':
    tasks = series(buildChalk)
    break
  case 'eui':
    tasks = series(...(await buildUI('eui')))
    break
  case 'hooks':
    tasks = series(buildHooks)
    break
  case 'icons':
    tasks = series(buildIcons)
    break
  default:
    tasks = series(buildChalk, buildHooks, buildIcons, ...(await buildUI('eui')))
}

export default tasks
