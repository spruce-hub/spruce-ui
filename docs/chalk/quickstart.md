---
author: Noah Yu
---

# 快速开始

:::tip
如果您的项目正在使用 Spruce UI 提供的组件，那么该样式库是默认内置的

如果您还想使用全局变量、mixin 等，那么您可以选择导入以下 SCSS 的其中一个

仅样式库：`@spruce-hub/chalk/scss/mixin.scss`

包含组件库和样式库：`@spruce-hub/<name>/dist/styles/scss/mixins/mixin.scss`
:::

## 安装

::: tabs#pm

@tab pnpm

```bash
pnpm add @spruce-hub/chalk -P
```

@tab npm

```bash
npm install @spruce-hub/chalk --save
```

:::

## 使用

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
