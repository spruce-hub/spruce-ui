import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import {
  BooleanSuccess,
  BooleanWarning,
  Error,
  Info,
  BooleanClose,
  Loading,
} from '@spruce-hub/icons'

import Alert from '../../src/alert.vue'

const iconComponents = {
  success: BooleanSuccess,
  warning: BooleanWarning,
  error: Error,
  info: Info,
}

const description = 'Alert Component'
const more: { text: string; align: 'center' | 'end' | 'start' } = {
  text: 'more text',
  align: 'center',
}

describe('Alert', () => {
  it('type test', () => {
    const wrapper = mount(() => <Alert type={'success'} />)
    expect(wrapper.find('.ys-alert').classes()).toContain('ys-alert--success')

    expect(wrapper.findComponent(iconComponents.success).exists()).toBe(true)
  })

  it('title test', () => {
    const wrapper = mount(() => <Alert type={'success'} title="title" center icon="start" />)

    expect(wrapper.find('.ys-alert .ys-alert__title').classes()).toContain('ys-alert__title')

    expect(wrapper.find('.ys-alert .ys-is--center').exists()).toBe(false)
    expect(wrapper.find('.ys-alert .ys-alert__icon--start').exists()).toBe(false)
  })

  it('description test', () => {
    const wrapper = mount(() => <Alert description={description} />)
    expect(wrapper.find('.ys-alert__content').text()).toEqual(description)
  })

  it('icon test', () => {
    const wrapper = mount(() => <Alert icon={'start'} />)
    expect(wrapper.find('.ys-icon').classes()).toContain('ys-alert__icon--start')
  })

  it('center test', () => {
    const wrapper = mount(() => <Alert center />)
    expect(wrapper.find('.ys-alert__content').classes()).toContain('ys-is--center')
  })

  it('loading test', () => {
    const wrapper = mount(() => <Alert loading />)
    expect(wrapper.find('.ys-icon').classes()).toContain('ys-is--loading')
    expect(wrapper.findComponent(Loading).exists()).toBe(true)
  })

  it('more test', async () => {
    const wrapper = mount(() => <Alert more={more} />)

    const moreBtn = wrapper.find('.ys-alert__more')

    expect(moreBtn.classes()).toContain('ys-alert__more--center')

    expect(moreBtn.exists()).toBe(true)
    expect(moreBtn.text()).toEqual(more.text)

    expect(wrapper.find('.ys-alert__close').exists()).toBe(false)

    await moreBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  it('closable test', async () => {
    const wrapper = mount(() => <Alert closable={'center'} />)
    const closeBtn = wrapper.find('.ys-icon.ys-alert__close')

    expect(wrapper.findComponent(BooleanClose).exists()).toBe(true)

    expect(closeBtn.classes()).toContain('ys-alert__close--center')

    expect(closeBtn.exists()).toBe(true)

    expect(wrapper.find('.ys-alert__more').exists()).toBe(false)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
