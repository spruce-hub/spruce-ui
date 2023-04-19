interface Separators {
  common: string
  element?: string
  modifier?: string
}

const namespace = 'e'
const statePrefix = 'e-is'

const createBEM = (separators: Separators): string => {
  const c = `${namespace}-${separators.common}`
  const e = `__${separators.element}`
  const m = `--${separators.modifier}`
  return `${c}${separators.element ? e : ''}${separators.modifier ? m : ''}`
}

export const className = (common: string) => {
  const separators: Separators = {
    common,
  }
  const b = (): string => {
    separators.element = ''
    separators.modifier = ''
    return createBEM(separators)
  }
  const e = (element: string): string => {
    separators.element = element
    separators.modifier = ''
    return createBEM(separators)
  }
  const m = (modifier: string): string => {
    separators.element = ''
    separators.modifier = modifier
    return createBEM(separators)
  }
  const bem = (element: string, modifier: string): string => {
    separators.element = element
    separators.modifier = modifier
    if (!element || !modifier) {
      return ''
    }
    return createBEM(separators)
  }

  const s = (...args: Array<{ [key: string]: boolean } | string>): string[] => {
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
    b,
    e,
    m,
    bem,
    s,
  }
}
