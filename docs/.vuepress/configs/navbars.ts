import type { NavbarConfig } from '@vuepress/theme-default'

export const navbars: NavbarConfig = [
  {
    text: '使用指南',
    link: '/guide/design.md',
    activeMatch: '^/guide/',
  },
  {
    text: '图标库',
    link: '/icons/index.md',
    activeMatch: '^/icons/',
  },
  {
    text: '(S)CRM 系统',
    link: '/cui/icon/index.md',
    activeMatch: '^/cui/',
  },
  {
    text: '电商系统',
    link: '/eui/icon/index.md',
    activeMatch: '^/eui/',
  },
  {
    text: '管理系统',
    link: '/mui/icon/index.md',
    activeMatch: '^/mui/',
  },
]
