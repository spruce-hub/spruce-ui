import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'

const euiRoot = resolve(cwd(), 'packages/eui')
const hooksRoot = resolve(cwd(), 'packages/hooks')

export default defineConfig({
  plugins: [Vue(), VueJsx()],
  optimizeDeps: {
    disabled: true,
  },
  test: {
    alias: {
      '@eui': `${euiRoot}`,
      '@eui/*': `${euiRoot}/*`,
      '@hooks': `${hooksRoot}`,
      '@hooks/*': `${hooksRoot}/*`,
    },
    // 匹配包含测试文件的 glob 规则
    include: ['**/__tests__/**/*.spec.tsx'],
    // 项目的根目录
    root: resolve(__dirname),
    // 每次测试前清除每一个对象模拟调用的所有信息
    clearMocks: true,
    environment: 'jsdom',
    // 测试覆盖
    coverage: {
      // 忽略测试覆盖的范围
      exclude: ['**/__tests__', '**/__mocks__'],
    },
  },
})
