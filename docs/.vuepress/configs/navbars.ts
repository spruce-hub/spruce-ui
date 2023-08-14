import type { NavbarConfig } from '@vuepress/theme-default'

export const navbars: NavbarConfig = [
  {
    text: '使用指南',
    link: '/guide/',
    activeMatch: '^/guide/',
  },
  {
    text: '图标库',
    link: '/icons/',
    activeMatch: '^/icons/',
  },
  {
    text: '内控系统',
    link: '/cui/',
    activeMatch: '^/cui/',
  },
  {
    text: '电商系统',
    link: '/eui/',
    activeMatch: '^/eui/',
  },
  {
    text: '样式库',
    link: '/chalk/',
    activeMatch: '^/chalk/',
  },
  {
    text: 'Hooks',
    link: '/hooks/index.md',
    activeMatch: '^/hooks/',
  },
]
