import { definePropType } from '@eui/utils'
import { Ref, ref, unref, watch } from 'vue'

export const countDownProps = {
  duration: {
    type: definePropType<number>(Number),
    default: 3,
  },
  active: {
    type: definePropType<boolean>(Boolean),
    default: true,
  },
  onFinish: {
    type: definePropType<() => void>(Function),
  },
}

export function useCountDown(
  isActive: Ref<boolean> | boolean = true,
  options?: { duration?: number; onFinish?: () => void },
) {
  const { duration = 3, onFinish } = options || {}
  const time = ref(duration)

  let timer: undefined | NodeJS.Timeout = undefined
  function doCountDown() {
    timer = setInterval(() => {
      time.value--
      if (time.value === 0) {
        clearInterval(timer)
        onFinish && onFinish()
      }
    }, 1000)
  }

  function reset() {
    time.value = duration
    // 如果之前存在一个timer，需要先删除掉，否则会出现重置后立即减一秒的情况
    if (timer) {
      clearInterval(timer)
      doCountDown()
    }
  }

  watch(
    () => unref(isActive),
    (val) => {
      val && time.value > 0 ? doCountDown() : clearInterval(timer)
    },
    {
      immediate: true,
    },
  )

  return {
    time,
    reset,
  }
}
