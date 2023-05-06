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

export default series(
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
