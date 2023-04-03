import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'

import { hopeTheme } from 'vuepress-theme-hope'
import { searchProPlugin } from 'vuepress-plugin-search-pro'

import { navbars, sidebars } from './configs'

const projectRoot = resolve(cwd(), '../packages/cui')

const __dirname = getDirname(import.meta.url)

const alias = {
  '@spruce-hub/cui': `${projectRoot}`,
  '@spruce-hub/cui/*': `${projectRoot}/*`,
  '@spruce-hub/mui': `${projectRoot}`,
  '@spruce-hub/mui/*': `${projectRoot}/*`,
}

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Spruce UI',
  description: '飞讯云杉前端组件库',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: hopeTheme({
    logo: '/logo.png',
    navbar: navbars,
    sidebar: sidebars,
    headerDepth: 3,
    darkmode: 'switch',
    print: false,
  }),
  public: 'public',
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, '../components'),
      getComponentName: (filename) => {
        // components/button/Basic.vue => <ButtonBasic />
        const name = path.trimExt(filename.replace(/\/|\\/g, ''))
        const componentName = name.slice(0, 1).toUpperCase() + name.slice(1)
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
  templateDev: path.resolve(__dirname, './index.html'),
  templateBuild: path.resolve(__dirname, './index.html'),
})
