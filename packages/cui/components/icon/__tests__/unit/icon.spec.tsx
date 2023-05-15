import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { BooleanSuccess } from '@spruce-hub/icons'

import Icon from '../../src/icon.vue'

describe('Icon', () => {
  it('color test', () => {
    const color = '#f00'

    const wrapper = mount(() => <Icon color={color} />)
    expect(wrapper.find('.ys-icon').attributes('style')).toBe(`--color: ${color};`)
  })

  it('size test', () => {
    const size = 16

    const wrapper = mount(() => <Icon size={size} />)
    expect(wrapper.find('.ys-icon').attributes('style')).toBe(`font-size: ${size}px;`)
  })

  it('component test', () => {
    const wrapper = mount(() => <Icon component={BooleanSuccess} />)
    expect(wrapper.findComponent(BooleanSuccess).exists()).toBe(true)
  })

  it('slot test', () => {
    const wrapper = mount(Icon, { slots: { default: [BooleanSuccess] } })
    expect(wrapper.findComponent(BooleanSuccess).exists()).toBe(true)
  })
})
