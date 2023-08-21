# 使用指南

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
