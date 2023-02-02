---
author: Noah Yu
---

# 快速开始

## 完整导入 <Badge type="tip" text="推荐" vertical="middle" />

> 客户端/管理端组件库使用方式相同，以下仅展示 **客户端组件库** 的使用方式

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import cui from '@spruce/cui'
import '@spruce/cui/dist/styles/index.css'

const app = createApp(App)

app.use(cui)
app.mount('#app')
```

```vue
<template>
  <CAlert type="success" description="success alert" closable="center" />
</template>
```

### Volar 支持

在 tsconfig.json 中通过 `compilerOptions.type` 指定全局组件类型即可得到 Volar 支持。

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@spruce/cui/global"]
  }
}
```

## 手动导入

手动导入的方式需要单独引入样式文件

```vue
<script setup lang="ts">
import '@spruce/cui/dist/components/alert/style/css'
import { CAlert } from '@spruce/cui'
</script>

<template>
  <CAlert type="success" description="success alert" closable="center" />
</template>
```

也可以引入完整的样式文件

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@spruce/cui/dist/styles/index.css'

const app = createApp(App)

app.mount('#app')
```

```vue
<script setup lang="ts">
import { CAlert } from '@spruce/cui'
</script>

<template>
  <CAlert type="success" description="success alert" closable="center" />
</template>
```

## 注意事项

**Spruce UI** 基于自身实现的 _Normalize.css_ 环境下开发，如果你的项目存在其他 _Normalize.css_ 或类似的格式化样式，可能会导致组件产生样式差异。
