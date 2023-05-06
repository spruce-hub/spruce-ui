import { resolve } from 'node:path'
import { cwd } from 'node:process'

export const projectRoot = resolve(cwd(), '../../')
export const pkgRoot = resolve(projectRoot, 'packages')
export const cuiRoot = resolve(pkgRoot, 'cui')
export const euiRoot = resolve(pkgRoot, 'eui')
export const muiRoot = resolve(pkgRoot, 'mui')
export const hooksRoot = resolve(pkgRoot, 'hooks')
export const iconsRoot = resolve(pkgRoot, 'icons')
