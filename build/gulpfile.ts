import { argv } from 'node:process'
import gulp from 'gulp'

import {
  buildHooks,
  buildIcons,
  buildCui,
  buildCuiStyle,
  copyCuiScss,
  buildEui,
  buildEuiStyle,
  copyEuiScss,
  buildMui,
  buildMuiStyle,
  copyMuiScss,
} from './src'

const { series } = gulp

let tasks

const libNameIndex = argv.indexOf('--lib') + 1

switch (argv[libNameIndex]) {
  case 'cui':
    tasks = series(buildCui, buildCuiStyle, copyCuiScss)
    break
  case 'eui':
    tasks = series(buildEui, buildEuiStyle, copyEuiScss)
    break
  case 'mui':
    tasks = series(buildMui, buildMuiStyle, copyMuiScss)
    break
  case 'hooks':
    tasks = series(buildHooks)
    break
  case 'icons':
    tasks = series(buildIcons)
    break
  default:
    tasks = series(
      buildHooks,
      buildIcons,
      buildCui,
      buildCuiStyle,
      copyCuiScss,
      buildEui,
      buildEuiStyle,
      copyEuiScss,
      buildMui,
      buildMuiStyle,
      copyMuiScss
    )
}

export default tasks
