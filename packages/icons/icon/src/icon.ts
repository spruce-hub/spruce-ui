/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PropType, Component } from 'vue'

type Color =
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgba(${string},${string},${string},${string})`
  | `var(${string})`

type FontSize = `${number}px` | `${number}em` | `var(${string})` | number
type NonNumberFontSize = Exclude<FontSize, number>

const definePropType = <T>(val: any): PropType<T> => val
const colorPropType = (val: any): PropType<Color> => val
const sizePropType = (val: any): PropType<FontSize> => val

type CssVars =
  | `--color: ${Color}`
  | `--font-size: ${NonNumberFontSize}`
  | `--text-color: ${Color}`
  | `--text-size: ${NonNumberFontSize}`
const cssVarPropType = (val: any): PropType<CssVars[]> => val

export const iconProps = {
  color: {
    type: colorPropType(String),
    default: '',
  },
  size: {
    type: sizePropType([String, Number]),
    default: '',
  },
  component: {
    type: definePropType<Component>(Object),
    default: null,
  },
  text: {
    type: [String, Number],
    default: '',
  },
  textColor: {
    type: colorPropType(String),
    default: '',
  },
  textSize: {
    type: sizePropType([String, Number]),
    default: '',
  },
  cssVar: {
    type: cssVarPropType(Array),
    default: [],
  },
  rtl: Boolean,
}
