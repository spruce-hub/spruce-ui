export const namespace = 'ys'
export const statePrefix = 'ys-is'

const createBEM = (common: string, element: string, modifier: string): string => {
  const c = `${namespace}-${common}`
  const e = `__${element}`
  const m = `--${modifier}`
  return `${c}${element ? e : ''}${modifier ? m : ''}`
}

/**
 * @example
 * const { bem, is } = useNamespace('example')
 *
 * bem() // 'ys-example'
 * bem('alert') // 'ys-example__alert'
 * bem('alert', 'primary') // 'ys-example__alert--primary'
 * bem('alert__button', 'primary') // 'ys-example__alert__button--primary'
 *
 * is({primary:true}) // ['ys-is--primary']
 * is('warning') // ['ys-is--warning']
 * is({primary:true}, 'warning') // ['ys-is--primary', 'ys-is--warning']
 * -------------------------- */
export const useNamespace = (common: string) => {
  const bem = (element?: string, modifier?: string): string => {
    const e = element || ''
    const m = modifier || ''
    return createBEM(common, e, m)
  }

  const is = (...args: Array<{ [key: string]: boolean } | string>): string[] => {
    const map: string[] = []
    args.forEach((item) => {
      if (typeof item === 'object') {
        map.push(
          ...Object.entries(item).map(([key, val]) => {
            if (!val) {
              return ''
            }
            return `${statePrefix}--${key}`
          })
        )
      } else {
        map.push(`${statePrefix}--${item}`)
      }
    })
    return map
  }

  return {
    bem,
    is,
  }
}
