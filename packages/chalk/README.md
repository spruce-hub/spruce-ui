# Spruce Chalk

> Spruce UI 的通用样式库

如果您的项目正在使用 Spruce UI 的组件，则表明该样式库已经内置

Spruce UI 组件不是必须的，您也可以通过以下方式单独使用

## Usage

```bash
pnpm add @spruce-hub/chalk -P
```

## Quick start

```ts
import '@spruce-hub/chalk'
```

### 您还可以导入内置的 SCSS 变量、mixin 等

> Vue

```ts
// vite.config.ts
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // ···
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@spruce-hub/chalk/scss/mixin.scss" as *;`,
      },
    },
  },
})
```

> Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ···
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@spruce-hub/chalk/scss/mixin.scss" as *;',
        },
      },
    },
  },
})
```
