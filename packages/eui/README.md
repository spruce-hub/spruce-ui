# Spruce EUI

> 适用于电商平台的公共组件或模块

## Usage

```bash
pnpm add @spruce-hub/eui -P
```

## Quick start

### Full Import

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import eui from '@spruce-hub/eui'

createApp(App).use(eui).mount('#app')
```

```html
<template>
  <EAlert type="success" description="success alert" closable="center" />
</template>
```

#### Volar support

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@spruce-hub/eui/global"]
  }
}
```

### On-demand Import

```html
<script setup lang="ts">
  import { EAlert } from '@spruce-hub/eui'
</script>

<template>
  <EAlert type="success" description="success alert" closable="center" />
</template>
```
