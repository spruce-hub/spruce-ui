import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const cui = resolve(cwd(), '../packages/cui')
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@cui': `${cui}`,
      '@cui/*': `${cui}/*`,
    },
  },
  server: {
    port: 3000,
  },
})
