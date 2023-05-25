import { ref, readonly, watch, Ref } from 'vue'

export function useFalseUntilTruthy(originalRef: Ref<unknown>): Readonly<Ref<boolean>> {
  const currentRef = ref(!!(originalRef.value as boolean))
  if (currentRef.value) {
    return readonly(currentRef)
  }
  const stop = watch(originalRef, (value: unknown) => {
    if (value as boolean) {
      currentRef.value = true
      stop()
    }
  })
  return readonly(currentRef)
}
