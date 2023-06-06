type Namespace = 'ys'
type StatePrefix = 'ys-is'

const namespace: Namespace = 'ys'
const statePrefix: StatePrefix = 'ys-is'

type CreateBEM<B extends string, E extends string, M extends string> = E extends ''
  ? M extends ''
    ? `${Namespace}-${B}`
    : `${Namespace}-${B}--${M}`
  : M extends ''
  ? `${Namespace}-${B}__${E}`
  : `${Namespace}-${B}__${E}--${M}`

type CreateIS<Arr extends unknown[]> = Arr extends [infer First, ...infer Rest]
  ? First extends Record<string, true>
    ? [`${StatePrefix}--${Extract<keyof First, string | number>}`, ...CreateIS<Rest>]
    : First extends string
    ? [`${StatePrefix}--${First}`, ...CreateIS<Rest>]
    : [...CreateIS<Rest>]
  : Arr

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
export const useNamespace = <B extends string>(b: B) => {
  function bem<E extends string = '', M extends string = ''>(e?: E, m?: M): CreateBEM<B, E, M>
  function bem(e?: string, m?: string) {
    if (e && m) {
      return `${namespace}-${b}__${e}--${m}`
    } else if (e && !m) {
      return `${namespace}-${b}__${e}`
    } else if (m && !e) {
      return `${namespace}-${b}--${m}`
    } else if (!e && !m) {
      return `${namespace}-${b}`
    }
    return ''
  }

  function is<T extends Array<Record<string, boolean> | string>>(...args: T): CreateIS<T>
  function is(...args: Array<Record<string, boolean> | string>) {
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
