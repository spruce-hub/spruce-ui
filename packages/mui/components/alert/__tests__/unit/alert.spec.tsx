import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { Success, Warning, Error, Info, Close, Loading } from '@spruce-hub/icons'

import Alert from '../../src/alert.vue'

const iconComponents = {
  success: Success,
  warning: Warning,
  error: Error,
  info: Info,
}

const description = 'Alert Component'
const more = { text: 'more text', align: 'center' }

describe('Alert', () => {
  it('type test', () => {
    const wrapper = mount(() => <Alert type={'success'} />)
    expect(wrapper.find('.m-alert').classes()).toContain('m-alert--success')

    expect(wrapper.findComponent(iconComponents.success).exists()).toBe(true)
  })

  it('title test', () => {
    const wrapper = mount(() => <Alert type={'success'} title="title" center icon="start" />)

    expect(wrapper.find('.m-alert .m-alert__title').classes()).toContain('m-alert__title')

    expect(wrapper.find('.m-alert .m-is--center').exists()).toBe(false)
    expect(wrapper.find('.m-alert .m-alert__icon--start').exists()).toBe(false)
  })

  it('description test', () => {
    const wrapper = mount(() => <Alert description={description} />)
    expect(wrapper.find('.m-alert__content').text()).toEqual(description)
  })

  it('icon test', () => {
    const wrapper = mount(() => <Alert icon={'start'} />)
    expect(wrapper.find('.m-icon').classes()).toContain('m-alert__icon--start')
  })

  it('center test', () => {
    const wrapper = mount(() => <Alert center />)
    expect(wrapper.find('.m-alert__content').classes()).toContain('m-is--center')
  })

  it('loading test', () => {
    const wrapper = mount(() => <Alert loading />)
    expect(wrapper.find('.m-icon').classes()).toContain('m-is--loading')
    expect(wrapper.findComponent(Loading).exists()).toBe(true)
  })

  it('more test', async () => {
    const wrapper = mount(() => <Alert more={more} />)

    const moreBtn = wrapper.find('.m-alert__more')

    expect(moreBtn.classes()).toContain('m-alert__more--center')

    expect(moreBtn.exists()).toBe(true)
    expect(moreBtn.text()).toEqual(more.text)

    expect(wrapper.find('.m-alert__close').exists()).toBe(false)

    await moreBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  it('closable test', async () => {
    const wrapper = mount(() => <Alert closable={'center'} />)
    const closeBtn = wrapper.find('.m-icon.m-alert__close')

    expect(wrapper.findComponent(Close).exists()).toBe(true)

    expect(closeBtn.classes()).toContain('m-alert__close--center')

    expect(closeBtn.exists()).toBe(true)

    expect(wrapper.find('.m-alert__more').exists()).toBe(false)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
