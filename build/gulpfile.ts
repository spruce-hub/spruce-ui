import { argv } from 'node:process'
import gulp from 'gulp'

import { buildHooks, buildIcons, buildUI } from './src'

const { series } = gulp

let tasks

const libNameIndex = argv.indexOf('--lib') + 1

switch (argv[libNameIndex]) {
  case 'cui':
    tasks = series(...(await buildUI('cui')))
    break
  case 'eui':
    tasks = series(...(await buildUI('eui')))
    break
  case 'mui':
    tasks = series(...(await buildUI('mui')))
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
      ...(await buildUI('cui')),
      ...(await buildUI('eui')),
      ...(await buildUI('mui'))
    )
}

export default tasks
