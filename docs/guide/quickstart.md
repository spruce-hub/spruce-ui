---
author: Noah Yu
---

# 快速开始

## 完整导入

> 客户端/管理端组件库使用方式相同，以下仅展示 **内控系统** 的使用方式

不建议您完整导入，除非您确定需要使用绝大多数组件

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import cui from '@spruce-hub/cui'
import '@spruce-hub/cui/dist/styles/index.css'

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
    "types": ["@spruce-hub/cui/global"]
  }
}
```

## 手动导入 <Badge type="tip" text="推荐" vertical="middle" />

手动导入的方式需要单独引入样式文件

```vue
<script setup lang="ts">
import { CAlert } from '@spruce-hub/cui'
import '@spruce-hub/cui/dist/styles/ys-alert.css'
</script>

<template>
  <CAlert type="success" description="success alert" closable="center" />
</template>
```

如果您使用了绝大多数组件，也可以引入完整的样式文件

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import '@spruce-hub/cui/dist/styles/index.css'

const app = createApp(App)

app.mount('#app')
```

```vue
<script setup lang="ts">
import { CAlert } from '@spruce-hub/cui'
</script>

<template>
  <CAlert type="success" description="success alert" closable="center" />
</template>
```
