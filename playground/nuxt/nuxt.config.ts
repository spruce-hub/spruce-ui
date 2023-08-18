/* global defineNuxtConfig */
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
import { cwd } from 'node:process'

const eui = resolve(cwd(), '../../packages/eui')
const icons = resolve(cwd(), '../../packages/icons')
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Spruce UI playground',
      htmlAttrs: {
        lang: 'zh-cn',
      },
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://oss.sprucefe.com/spruce-ui/logo/favicon.ico',
        },
      ],
    },
  },
  modules: ['@element-plus/nuxt'],
  alias: {
    '@eui': `${eui}`,
    '@eui/*': `${eui}/*`,
    '@icons': `${icons}`,
    '@icons/*': `${icons}/*`,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@spruce-hub/chalk/scss/mixin.scss" as *;
          @use "@spruce-hub/eui/styles/index.scss" as *;
          @use "@spruce-hub/icons/styles/index.scss" as *;
          `,
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
        '@assets': '/src/assets',
        '@eui': `${eui}`,
        '@eui/*': `${eui}/*`,
        '@icons': `${icons}`,
        '@icons/*': `${icons}/*`,
      },
    },
  },
  devServer: {
    port: 3001,
  },
})
