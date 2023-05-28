# Spruce CUI

> 适用于 (S)CRM 平台的公共组件或模块

## Usage

```bash
pnpm add @spruce-hub/cui -P
```

## Quick start

### Full Import

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import cui from '@spruce-hub/cui'

createApp(App).use(cui).mount('#app')
```

```html
<template>
  <CAlert type="success" description="success alert" closable="center" />
</template>
```

#### Volar support

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@spruce-hub/cui/global"]
  }
}
```

### On-demand Import

```html
<script setup lang="ts">
  import { CAlert } from '@spruce-hub/cui'
</script>

<template>
  <CAlert type="success" description="success alert" closable="center" />
</template>
```
