import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

const cui = resolve(cwd(), '../../packages/cui')
const eui = resolve(cwd(), '../../packages/eui')
const mui = resolve(cwd(), '../../packages/mui')
const icons = resolve(cwd(), '../../packages/icons')
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), visualizer() as PluginOption],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@cui': `${cui}`,
      '@cui/*': `${cui}/*`,
      '@eui': `${eui}`,
      '@eui/*': `${eui}/*`,
      '@mui': `${mui}`,
      '@mui/*': `${mui}/*`,
      '@icons': `${icons}`,
      '@icons/*': `${icons}/*`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@spruce-hub/chalk/scss/mixin.scss" as *;',
      },
    },
  },
  server: {
    port: 3000,
  },
})
