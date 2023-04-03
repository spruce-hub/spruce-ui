import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { Success } from '@spruce-hub/icons'

import Icon from '../../src/icon.vue'

describe('Icon', () => {
  it('color test', () => {
    const color = '#f00'

    const wrapper = mount(() => <Icon color={color} />)
    expect(wrapper.find('.c-icon').attributes('style')).toBe(`--color: ${color};`)
  })

  it('size test', () => {
    const size = 16

    const wrapper = mount(() => <Icon size={size} />)
    expect(wrapper.find('.c-icon').attributes('style')).toBe(`font-size: ${size}px;`)
  })

  it('component test', () => {
    const wrapper = mount(() => <Icon component={Success} />)
    expect(wrapper.findComponent(Success).exists()).toBe(true)
  })

  it('slot test', () => {
    const wrapper = mount(Icon, { slots: { default: [Success] } })
    expect(wrapper.findComponent(Success).exists()).toBe(true)
  })
})
