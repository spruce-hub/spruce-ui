import type { NavbarConfig } from '@vuepress/theme-default'

export const navbars: NavbarConfig = [
  {
    text: '电商系统',
    link: '/eui/',
    activeMatch: '^/eui/',
  },
  {
    text: '图标库',
    link: '/icons/',
    activeMatch: '^/icons/',
  },
  {
    text: '样式库',
    link: '/chalk/',
    activeMatch: '^/chalk/',
  },
  {
    text: 'Hooks',
    link: '/hooks/',
    activeMatch: '^/hooks/',
  },
]
