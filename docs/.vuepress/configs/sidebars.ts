const basic = ['icon']
const feedback = ['alert']

const children = (lib: string, componentName: string[]) => {
  const cn = componentName.sort()
  return cn.map((item) => `/${lib}/${item}/index.md`)
}

export const sidebars = {
  '/guide/': [
    { text: '设计原则', link: '/guide/design.md' },
    { text: '安装', link: '/guide/install.md' },
    { text: '快速开始', link: '/guide/quickstart.md' },
  ],
  '/icons/': [
    { text: '图标集', link: '/icons/index.md' },
    { text: '基础用法', link: '/icons/instructions.md' },
  ],
  '/cui/': [
    {
      text: '基础组件',
      children: children('cui', basic),
    },
    {
      text: '反馈组件',
      children: children('cui', feedback),
    },
  ],
  '/mui/': [
    {
      text: '基础组件',
      children: children('mui', basic),
    },
    {
      text: '反馈组件',
      children: children('mui', feedback),
    },
  ],
}
