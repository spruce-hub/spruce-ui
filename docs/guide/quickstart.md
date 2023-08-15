---
author: Noah Yu
---

# 快速开始

## 完整导入

不建议您完整导入，除非您确定需要使用绝大多数组件

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import eui from '@spruce-hub/eui'

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

### Volar 支持

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

## 手动导入 <Badge type="tip" text="推荐" vertical="middle" />

```vue
<script setup lang="ts">
import { EHeaderMenu } from '@spruce-hub/eui'

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
