import type { Plugin } from 'rollup'

export const alias = (paths: { [key: string]: string }): Plugin => {
  return {
    name: 'build-alias',
    resolveId(source) {
      const result = Object.keys(paths).filter((item) => source.startsWith(item))

      if (result.length !== 1) {
        return undefined
      }

      return {
        id: source.replaceAll(`${result[0]}`, paths[`${result[0]}`]),
        external: 'absolute',
      }
    },
  }
}
