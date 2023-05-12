import { afterEach, beforeAll, describe, expect, it } from 'vitest'
import FilePreview from '../../src/file-preview.vue'
import { mount } from '@vue/test-utils'
import { h } from '@vue/runtime-core'
import { nextTick } from 'vue'
import { LazyTeleport } from 'vueuc'

const base = '.c-file-preview__teleport__'
const findModuleEl = (suffix: string): Element | null => document.querySelector(base + suffix)
const findContainerEl = () => findModuleEl('container')

describe('FilePreview', () => {
  afterEach(() => {
    // clean up
    document.body.innerHTML = ''
  })

  it('should work with `visible` prop', async () => {
    const wrapper = mount(FilePreview)
    /**
     * The component LazyTeleport encapsulates Teleport and includes a lazy attribute,
     * which will not render Teleport immediately when FilePreview is first rendered.
     * Whether Teleport executes depends on the visible attribute,
     * and once visible is true for the first time, Teleport will always be present.
     *
     * However, the c-file-preview__teleport__container class will be rendered based on the value of visible.
     *
     *  */
    // The default value is 'false'
    // const fineContainerEl = () => document.querySelector('.c-file-preview__teleport__container')
    const lazyTeleport = wrapper.findComponent(LazyTeleport)
    expect(lazyTeleport.vm.showTeleport).toBe(false)
    expect(findContainerEl()).toBeNull()

    // set value is true
    wrapper.setProps({ visible: true })
    await nextTick()
    expect(lazyTeleport.vm.showTeleport).toBe(true)
    expect(findContainerEl()).not.toBeNull()

    // set value is false
    wrapper.setProps({ visible: false })
    await nextTick()
    expect(lazyTeleport.vm.showTeleport).toBe(true)
    expect(findContainerEl()).toBeNull()
    wrapper.unmount()
  })

  it('should work with `attachTo` prop', async () => {
    // create teleport target
    const el = document.createElement('div')
    el.id = 'modal'
    document.body.appendChild(el)

    const wrapper = mount(FilePreview, {
      props: {
        visible: true,
      },
    })
    // The default value is 'body'
    expect(findContainerEl()?.parentElement).toBe(document.body)
    expect(findContainerEl()?.parentElement?.getAttribute('id')).not.toBe('modal')

    // set value is '#modal'
    wrapper.setProps({ attachTo: '#modal' })
    await nextTick()
    expect(findContainerEl()?.parentElement).not.toBe(document.body)
    expect(findContainerEl()?.parentElement?.getAttribute('id')).toBe('modal')
    wrapper.unmount()
  })

  it('should work with [`default`,`close`，`error`] slot', async () => {
    const wrapper = mount(FilePreview, {
      props: { visible: true },
      slots: {
        error: () =>
          h(
            'button',
            {
              class: 'error-slot__test',
            },
            'error slot test'
          ),
        close: () =>
          h(
            'button',
            {
              class: 'close-slot__test',
            },
            'close slot test'
          ),
        default: () => [
          h(
            'button',
            {
              class: 'default-slot-test',
            },
            'default slot test'
          ),
        ],
      },
    })
    // default slot test
    expect(wrapper.find('.default-slot-test').exists()).toBe(true)
    // close slot test
    expect(findModuleEl('close--icon')).toBeNull()
    expect(document.querySelector('.close-slot__test')).not.toBeNull()
    // error slot test
    expect(findModuleEl('.error_container')).toBeNull()
    expect(document.querySelector('.error-slot__test')).not.toBeNull()
    wrapper.unmount()
  })

  it('should work with `fileUrl` prop', async () => {
    const wrapper = mount(FilePreview, {
      props: { visible: true },
    })

    let url = ''
    // The default value is '',Display error style.
    expect(wrapper.vm.file.viewType).toBe('error')
    expect(findModuleEl('error')).not.toBeNull()
    expect(findModuleEl('wrapper')).toBeNull()

    // set value is image type url
    url =
      'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/675b18b5-f59a-4340-938e-cae3fcf72cce.png'
    wrapper.setProps({
      fileUrl: url,
    })
    await nextTick()
    expect(wrapper.vm.file.viewType).toBe('image')
    expect(findModuleEl('wrapper')).not.toBeNull()
    expect(findModuleEl('content--image')).not.toBeNull()
    expect(findModuleEl('content--image')?.getAttribute('src')).toBe(url)
    expect(findModuleEl('content--office')).toBeNull()
    expect(findModuleEl('error')).toBeNull()

    // set value is office type url
    url =
      'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/6d2d19f7-f6b9-4892-bcaa-fc3a7b047e7d.docx'
    wrapper.setProps({
      fileUrl: url,
    })
    await nextTick()
    expect(wrapper.vm.file.viewType).toBe('office')
    expect(findModuleEl('wrapper')).not.toBeNull()
    expect(findModuleEl('content--office')).not.toBeNull()
    expect(findModuleEl('content--office')?.children[0].getAttribute('src')).toBe(
      'https://view.officeapps.live.com/op/view.aspx?src=' + url
    )
    expect(findModuleEl('content--image')).toBeNull()
    expect(findModuleEl('error')).toBeNull()
    wrapper.unmount()
  })

  it('should work with `errorBgColor` prop', async () => {
    const wrapper = mount(FilePreview, {
      props: { visible: true },
    })

    // The default value is 'rgba(0, 0, 0, 0.6)'
    expect(wrapper.vm.teleportStyle['--c-file-preview-error-bgColor']).toBe('rgba(0, 0, 0, 0.6)')
    // set value is '#000'
    wrapper.setProps({ errorBgColor: '#000' })
    await nextTick()
    expect(wrapper.vm.teleportStyle['--c-file-preview-error-bgColor']).toBe('#000')

    wrapper.unmount()
  })

  it('should work with `errorIconColor` prop', async () => {
    const wrapper = mount(FilePreview, {
      props: { visible: true },
    })

    // The default value is '#e88420'
    expect(wrapper.vm.teleportStyle['--c-file-preview-error-iconColor']).toBe('#e88420')
    // set value is '#000'
    wrapper.setProps({ errorIconColor: '#000' })
    await nextTick()
    expect(wrapper.vm.teleportStyle['--c-file-preview-error-iconColor']).toBe('#000')

    wrapper.unmount()
  })

  it('should work with `imageWrapperStyle` prop', async () => {
    const testStyle = 'padding: 0px;'
    const wrapper = mount(FilePreview, {
      props: {
        visible: true,
        imageWrapperStyle: testStyle,
        fileUrl:
          'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/675b18b5-f59a-4340-938e-cae3fcf72cce.png',
      },
    })
    await nextTick()
    expect(findModuleEl('wrapper')?.getAttribute('style')).toContain(testStyle)
    wrapper.unmount()
  })

  it('should work with `imageStyle` prop', async () => {
    const testStyle = 'padding: 0px;'
    const wrapper = mount(FilePreview, {
      props: {
        visible: true,
        imageStyle: testStyle,
        fileUrl:
          'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/675b18b5-f59a-4340-938e-cae3fcf72cce.png',
      },
    })
    await nextTick()
    expect(findModuleEl('content--image')?.getAttribute('style')).toContain(testStyle)
    wrapper.unmount()
  })

  it('should work with `imageWrapperStyle` prop', async () => {
    const testStyle = 'padding: 0px;'
    const wrapper = mount(FilePreview, {
      props: {
        visible: true,
        officeWrapperStyle: testStyle,
        fileUrl:
          'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/6d2d19f7-f6b9-4892-bcaa-fc3a7b047e7d.docx',
      },
    })
    await nextTick()
    expect(findModuleEl('wrapper')?.getAttribute('style')).toContain(testStyle)
    wrapper.unmount()
  })

  it('should work with `officeStyle` prop', async () => {
    const testStyle = 'padding: 0px;'
    const wrapper = mount(FilePreview, {
      props: {
        visible: true,
        officeStyle: testStyle,
        fileUrl:
          'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/6d2d19f7-f6b9-4892-bcaa-fc3a7b047e7d.docx',
      },
    })
    await nextTick()
    expect(findModuleEl('content--office')?.getAttribute('style')).toContain(testStyle)
    wrapper.unmount()
  })

  it('should work with `beforeClose` emit', async () => {
    let test = 1

    const wrapper = mount(FilePreview, {
      props: {
        visible: true,
        onBeforeClose: () => test++,
      },
    })
    findModuleEl('close')?.click()
    await nextTick()
    expect(test).toBe(2)
    wrapper.unmount()
  })

  it('should work with `update:visible` emit', async () => {
    let test = 1

    const wrapper = mount(FilePreview, {
      props: {
        visible: true,
        'onUpdate:visible': () => test++,
      },
    })
    findModuleEl('close')?.click()
    await nextTick()
    expect(test).toBe(2)
    wrapper.unmount()
  })
})
