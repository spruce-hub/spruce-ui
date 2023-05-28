# Spruce Icons

> Icon library with not many icons

## Usage

```bash
pnpm add @spruce-hub/icons -P
```

## Quick start

### Full Import

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

import icons from '@spruce-hub/icons'

createApp(App).use(icons).mount('#app')
```

```html
<script setup lang="ts">
  import { EIcon } from '@spruce-hub/eui'
</script>

<template>
  <EIcon>
    <AliPay />
  </EIcon>
</template>
```

#### Volar support

```json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["@spruce-hub/icons/global"]
  }
}
```

### On-demand Import

```html
<script setup lang="ts">
  import { EIcon } from '@spruce-hub/eui'
  import { AliPay } from '@spruce-hub/icons'
</script>

<template>
  <EIcon>
    <AliPay />
  </EIcon>
</template>
```
