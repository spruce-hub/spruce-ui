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
    text: '(S)CRM 系统',
    link: '/cui/',
    activeMatch: '^/cui/',
  },
  {
    text: '电商系统',
    link: '/eui/',
    activeMatch: '^/eui/',
  },
  {
    text: '管理系统',
    link: '/mui/',
    activeMatch: '^/mui/',
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
