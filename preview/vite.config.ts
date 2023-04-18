import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'

const cui = resolve(cwd(), '../packages/cui')
const mui = resolve(cwd(), '../packages/mui')
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
      '@mui': `${mui}`,
      '@mui/*': `${mui}/*`,
    },
  },
  server: {
    port: 3000,
  },
})
