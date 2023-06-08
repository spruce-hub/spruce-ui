import { relative, dirname } from 'node:path'

import type { Plugin } from 'rollup'

interface Options {
  paths: Record<string, string>
  exclude: string[]
}

export const alias = (options: Options): Plugin => {
  return {
    name: 'build-alias',
    resolveId(source, importer) {
      let id = ''
      const exclude = options.exclude.filter((item) => source.startsWith(item))
      const result = Object.keys(options.paths).filter((item) => source.startsWith(item))

      if (exclude.length > 0) {
        id = source
      } else if (result.length === 1) {
        const toPath = source.replaceAll(`${result[0]}`, options.paths[`${result[0]}`])
        id = relative(dirname(importer || ''), toPath).replace(/^[a-z]/, './$&')
      } else {
        return undefined
      }

      return {
        id,
        external: 'absolute',
      }
    },
  }
}
