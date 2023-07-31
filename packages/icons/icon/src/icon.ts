/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PropType, Component } from 'vue'

const definePropType = <T>(val: any): PropType<T> => val
const colorPropType = (
  val: any,
): PropType<
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgba(${string},${string},${string},${string})`
  | `--ys-${string}`
> => val

export const iconProps = {
  color: {
    type: colorPropType(String),
    default: '',
  },
  size: {
    type: Number,
    default: null,
  },
  component: {
    type: definePropType<Component>(Object),
    default: null,
  },
}
