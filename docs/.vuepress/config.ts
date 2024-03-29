import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import { hopeTheme } from 'vuepress-theme-hope'
import { searchProPlugin } from 'vuepress-plugin-search-pro'

import { navbars, sidebars } from './configs'

const euiRoot = resolve(cwd(), '../packages/eui')
const iconsRoot = resolve(cwd(), '../packages/icons')

const __dirname = getDirname(import.meta.url)

const alias = {
  '@spruce-hub/eui': `${euiRoot}`,
  '@spruce-hub/eui/*': `${euiRoot}/*`,
  '@spruce-hub/icons': `${iconsRoot}`,
  '@spruce-hub/icons/*': `${iconsRoot}/*`,
}

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Spruce UI',
  description: '飞讯云杉前端组件库',
  head: [['link', { rel: 'icon', href: 'https://oss.sprucefe.com/spruce-ui/logo/favicon.ico' }]],
  theme: hopeTheme({
    logo: 'https://oss.sprucefe.com/spruce-ui/logo/logo.png',
    navbar: navbars,
    sidebar: sidebars,
    headerDepth: 3,
    darkmode: 'toggle',
    print: false,
    displayFooter: true,
    footer:
      'MIT Licensed | Copyright © 2023-present Spruce FE <a href="https://beian.miit.gov.cn/">粤ICP备2022018468号-3</a>',
    copyright: false,
    plugins: {
      copyCode: {},
      mdEnhance: {
        tabs: true,
        vuePlayground: true,
        chart: true,
        attrs: true,
      },
    },
  }),
  public: 'public',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../components'),
      getComponentName: (filename) => {
        // components/button/basic-a.vue => <ButtonBasicA />
        const fullName = filename
          .split(/\/|\\|-/)
          .map((name) => {
            return name.slice(0, 1).toUpperCase() + name.slice(1)
          })
          .join('')
        const componentName = path.trimExt(fullName)
        return componentName
      },
    }),
    searchProPlugin({
      indexContent: true,
      hotKeys: [{ key: 'k', ctrl: true }],
    }),
  ],
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias,
      },
    },
    vuePluginOptions: {},
  }),
})
