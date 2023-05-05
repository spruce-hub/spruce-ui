import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import CountDown from '../../src/count-down.vue'
import { useCountDown } from '../../src/count-down'
import { nextTick, ref } from 'vue'

describe('CountDown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('状态变更为true时，执行倒计时，false时停止倒计时', async () => {
    const isActive = ref(false)
    const { time } = useCountDown(isActive)
    expect(time.value).toBe(3)
    isActive.value = true
    await nextTick()
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(2)
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(1)
  })

  it('可设置时长', () => {
    const { time } = useCountDown(true, { duration: 2 })
    expect(time.value).toBe(2)
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(1)
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(0)
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(0)
  })

  it('倒计时结束时，执行onFinish', () => {
    const handleFinish = vi.fn()
    useCountDown(true, { onFinish: handleFinish })
    vi.runAllTimers()
    expect(handleFinish).toBeCalled()
  })

  it('执行重置，恢复初始化的状态', () => {
    const { time, reset } = useCountDown(true)
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(2)
    reset()
    expect(time.value).toBe(3)
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(2)
  })

  it('初始挂载，默认立即倒数', async () => {
    const wrapper = mount(CountDown)
    expect(wrapper.text()).toContain('3S')
    vi.advanceTimersToNextTimer()
    await nextTick()
    expect(wrapper.text()).toContain('2S')
  })

  it('倒计结束，再次切换active，不应该出现负数', async () => {
    const isActive = ref(true)
    const { time } = useCountDown(isActive, { duration: 2 })
    vi.runAllTimers()
    expect(time.value).toBe(0)
    isActive.value = false
    await nextTick()
    isActive.value = true
    await nextTick()
    vi.advanceTimersToNextTimer()
    expect(time.value).toBe(0)
  })

  it.only('重置后，需要舍弃掉上一个计时器的已计算时间，例如：0.6秒', async () => {
    const { time, reset } = useCountDown()
    vi.advanceTimersByTime(1600)
    expect(time.value).toBe(2)
    reset()
    vi.advanceTimersByTime(400)
    expect(time.value).toBe(3)
  })
})
