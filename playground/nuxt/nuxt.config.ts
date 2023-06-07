/* global defineNuxtConfig */
// https://nuxt.com/docs/api/configuration/nuxt-config
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
  css: ['@spruce-hub/chalk/dist/index.css', '@spruce-hub/eui/dist/styles/index.css'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@spruce-hub/chalk/dist/scss/mixin.scss" as *;',
        },
      },
    },
  },
  devServer: {
    port: 3001,
  },
})
