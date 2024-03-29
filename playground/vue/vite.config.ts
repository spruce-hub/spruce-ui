import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

const eui = resolve(cwd(), '../../packages/eui')
const icons = resolve(cwd(), '../../packages/icons')
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), visualizer() as PluginOption],
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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@spruce-hub/chalk/scss/mixin.scss" as *;',
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
})
