export const sidebars = {
  '/guide/': [
    { text: '设计原则', link: '/guide/design' },
    { text: '安装', link: '/guide/install' },
    { text: '快速开始', link: '/guide/quickstart' },
  ],
  '/cui/': [
    {
      text: '基础组件',
      children: ['/cui/file-preview', '/cui/icon'],
    },
    {
      text: '反馈组件',
      children: ['/cui/alert'],
    },
  ],
  '/eui/': [
    {
      text: '基础组件',
      children: ['/eui/icon'],
    },
    {
      text: '反馈组件',
      children: ['/eui/alert', '/eui/count-down'],
    },
  ],
  '/mui/': [
    {
      text: '基础组件',
      children: ['/mui/icon'],
    },
    {
      text: '反馈组件',
      children: ['/mui/alert'],
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
    },
    {
      text: 'Mixin',
      children: ['/chalk/mixin/bem'],
    },
  ],
}
