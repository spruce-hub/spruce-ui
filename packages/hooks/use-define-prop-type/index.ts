/* eslint-disable @typescript-eslint/no-explicit-any */
import type { PropType } from 'vue'

export const useDefinePropType = <T>(val: any): PropType<T> => val

export const useDefineColorType = (
  val: any
): PropType<
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgba(${string},${string},${string},${string})`
  | `--c-${string}`
> => val
