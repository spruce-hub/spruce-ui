import gulp from 'gulp'

import {
  buildIcons,
  buildCui,
  buildCuiStyle,
  copyCuiScss,
  buildMui,
  buildMuiStyle,
  copyMuiScss,
} from './src'

const { series } = gulp

export default series(
  buildIcons,
  buildCui,
  buildCuiStyle,
  copyCuiScss,
  buildMui,
  buildMuiStyle,
  copyMuiScss
)
