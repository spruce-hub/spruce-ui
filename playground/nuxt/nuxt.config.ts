/* global defineNuxtConfig */
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'node:path'
import { cwd } from 'node:process'

const cui = resolve(cwd(), '../../packages/cui')
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
  css: ['@spruce-hub/chalk/dist/index.css', '@spruce-hub/icons/dist/styles/index.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "@spruce-hub/chalk/scss/mixin.scss" as *;
          `,
        },
      },
    },
    resolve: {
      alias: {
        '@': '/src',
        '@assets': '/src/assets',
        '@cui': `${cui}`,
        '@cui/*': `${cui}/*`,
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
