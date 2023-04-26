import { defineComponent, nextTick } from 'vue'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import { useNamespace } from '../use-namespace'

import type { VueWrapper } from '@vue/test-utils'

const TestComp = defineComponent({
  setup() {
    const { bem, is } = useNamespace('example')

    const classExample = {
      focus: true,
      primary: true,
    }

    return () => (
      <div
        id="testId"
        class={[
          bem(), // 'ys-example'
          bem('alert'), // 'ys-example__alert'
          bem('alert', 'primary'), // 'ys-example__alert--primary'

          is({ hover: true }), // ['ys-is--hover']
          is(classExample), // ['ys-is--focus', 'ys-is--primary']
          is('warning'), // ['ys-is--warning']
          is('active', 'click'), // ['ys-is--active', 'ys-is--click']
          is({ wheel: true }, 'mouseenter'), // ['ys-is--wheel', 'ys-is--mouseenter']
        ]}
      >
        text
      </div>
    )
  },
})

describe('use-namespace', () => {
  const Comp = defineComponent({
    setup(_props, { slots }) {
      return () => slots.default?.()
    },
  })

  let wrapper: VueWrapper<InstanceType<typeof Comp>>
  beforeEach(() => {
    wrapper = mount(Comp, {
      slots: { default: () => <TestComp /> },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('bem test', async () => {
    await nextTick()
    expect(wrapper.find('#testId').classes()).toEqual([
      'ys-example', // bem()
      'ys-example__alert', // bem('alert')
      'ys-example__alert--primary', // bem('alert', 'primary')

      'ys-is--hover', // is({ hover: true })
      'ys-is--focus', // is(classExample)
      'ys-is--primary',
      'ys-is--warning', // is('warning')
      'ys-is--active', // is('active', 'click')
      'ys-is--click',
      'ys-is--wheel', // is({ wheel: true }, 'mouseenter')
      'ys-is--mouseenter',
    ])
  })
})
