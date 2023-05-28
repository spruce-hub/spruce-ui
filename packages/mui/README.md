# Spruce MUI

> 适用于管理平台的公共组件或模块

## Usage

```bash
pnpm add @spruce-hub/mui -P
```

## Quick start

### Full Import

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import mui from '@spruce-hub/mui'

createApp(App).use(mui).mount('#app')
```

```html
<template>
  <MAlert type="success" description="success alert" closable="center" />
</template>
```

#### Volar support

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@spruce-hub/mui/global"]
  }
}
```

### On-demand Import

```html
<script setup lang="ts">
  import { MAlert } from '@spruce-hub/mui'
</script>

<template>
  <MAlert type="success" description="success alert" closable="center" />
</template>
```
