import { resolve } from 'node:path'
import { cwd } from 'node:process'

export const projectRoot = resolve(cwd(), '../../')
export const pkgRoot = resolve(projectRoot, 'packages')
export const cuiRoot = resolve(pkgRoot, 'cui')
export const iconsRoot = resolve(pkgRoot, 'icons')
export const muiRoot = resolve(pkgRoot, 'mui')
