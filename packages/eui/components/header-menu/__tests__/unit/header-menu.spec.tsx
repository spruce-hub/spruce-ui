import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import HeaderMenu from '../../src/header-menu.vue'

const navs = [
  { value: '菜单1', linkTo: '' },
  { value: '菜单2', linkTo: '' },
  { value: '菜单3', linkTo: '' },
  { value: '菜单4', linkTo: '' },
  { value: '菜单5', linkTo: '/' },
  { value: '菜单6', linkTo: '/' },
]

describe('HeaderMenu', () => {
  it('navs test', () => {
    const wrapper = mount(() => <HeaderMenu navs={navs} />)
    expect(wrapper.find('.ys-header-menu .ys-header-menu__nav').classes())
  })
})
