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
    text: '客户端组件',
    link: '/cui/icon/index.md',
    activeMatch: '^/cui/',
  },
  {
    text: '管理端组件',
    link: '/mui/icon/index.md',
    activeMatch: '^/mui/',
  },
]
