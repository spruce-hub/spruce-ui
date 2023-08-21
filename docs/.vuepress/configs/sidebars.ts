export const sidebars = {
  '/eui/': [
    {
      text: '使用指南',
      link: '/eui/',
    },
    {
      text: 'Header',
      children: ['/eui/header-menu'],
    },
  ],
  '/icons/': [
    { text: '使用指南', link: '/icons/' },
    { text: '图标集', link: '/icons/list' },
  ],
  '/chalk/': [
    {
      text: '使用指南',
      link: '/chalk/',
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
