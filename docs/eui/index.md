# 使用指南

## 环境支持

| ![Edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge@2.0.5/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox@3.0.9/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome@2.0.0/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari@2.1.0/safari_32x32.png) |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Edge ≥ 79                                                                      | Firefox ≥ 78                                                                            | Chrome ≥ 64                                                                          | Safari ≥ 12                                                                          |

## 安装

::: tabs#pm

@tab pnpm

```bash
pnpm add @spruce-hub/eui@next -P
```

@tab npm

```bash
npm install @spruce-hub/eui@next --save
```

:::

## 手动导入 <Badge type="tip" text="推荐" vertical="middle" />

模块化组件使用数量和频率相对较低，手动导入可以节省您的构建空间

```vue
<script setup lang="ts">
import { EHeaderMenu } from '@spruce-hub/eui'
import '@spruce-hub/eui/dist/components/header-menu/style/css'

const navs = [
  { value: '首页', linkTo: '/' },
  { value: '使用指南', linkTo: '/guide' },
  { value: '电商系统', linkTo: '/eui' },
  { value: '图标库', linkTo: '/icons' },
  { value: '样式库', linkTo: '/chalk' },
]
</script>

<template>
  <EHeaderMenu :navs="navs">
    <template #header-left>
      <div class="ys-logo">
        <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
      </div>
    </template>
    <template #header-right>
      <div class="ys-logo">
        <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
      </div>
    </template>
  </EHeaderMenu>
</template>

<style lang="scss" scoped>
.ys-logo {
  height: 58px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
```

## 完整导入

不建议您完整导入，除非您确定需要使用绝大多数组件

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import eui from '@spruce-hub/eui'
import '@spruce-hub/eui/dist/styles/index.css'

const app = createApp(App)

app.use(eui)
app.mount('#app')
```

```vue
<script setup lang="ts">
const navs = [
  { value: '首页', linkTo: '/' },
  { value: '使用指南', linkTo: '/guide' },
  { value: '电商系统', linkTo: '/eui' },
  { value: '图标库', linkTo: '/icons' },
  { value: '样式库', linkTo: '/chalk' },
]
</script>

<template>
  <EHeaderMenu :navs="navs">
    <template #header-left>
      <div class="ys-logo">
        <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
      </div>
    </template>
    <template #header-right>
      <div class="ys-logo">
        <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
      </div>
    </template>
  </EHeaderMenu>
</template>

<style lang="scss" scoped>
.ys-logo {
  height: 58px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
```

## Volar 支持

在 tsconfig.json 中通过 `compilerOptions.type` 指定全局组件类型即可得到 Volar 支持。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@spruce-hub/eui/global"]
  }
}
```
