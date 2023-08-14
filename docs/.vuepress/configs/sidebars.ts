export const sidebars = {
  '/guide/': [
    { text: '设计原则', link: '/guide/design' },
    { text: '安装', link: '/guide/install' },
    { text: '快速开始', link: '/guide/quickstart' },
  ],
  '/icons/': [
    { text: '使用指南', link: '/icons/' },
    { text: '图标集', link: '/icons/list' },
  ],
  '/cui/': [
    {
      text: '基础组件',
      children: ['/cui/file-preview'],
    },
    {
      text: '反馈组件',
      children: ['/cui/alert'],
    },
  ],
  '/eui/': [
    {
      text: '反馈组件',
      children: ['/eui/alert', '/eui/count-down'],
    },
  ],
  '/chalk/': [
    {
      text: '快速开始',
      link: '/chalk/quickstart',
    },
    {
      text: '主题',
      link: '/chalk/theme',
      children: ['/chalk/theme/cover'],
    },
    {
      text: 'Mixin',
      children: ['/chalk/mixin/bem'],
    },
  ],
}
