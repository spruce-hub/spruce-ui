import { relative, dirname } from 'node:path'

import type { Plugin } from 'rollup'

export const alias = (paths: { [key: string]: string }): Plugin => {
  return {
    name: 'build-alias',
    resolveId(source, importer) {
      const result = Object.keys(paths).filter((item) => source.startsWith(item))

      if (result.length !== 1) {
        return undefined
      }

      const toPath = source.replaceAll(`${result[0]}`, paths[`${result[0]}`])
      return {
        id: relative(dirname(importer || ''), toPath).replace(/^[a-z]/, './$&'),
        external: 'absolute',
      }
    },
  }
}
