# Spruce EUI

> 适用于电商平台的公共组件或模块

## Usage

```bash
pnpm add @spruce-hub/eui -P
```

## Quick start

```html
<script setup lang="ts">
  import { EHeaderMenu } from '@spruce-hub/eui'
</script>

<template>
  <EHeaderMenu :navs=[{value:'菜单1', linkTo: '/menu-1'}, {value:'菜单2', linkTo: '/menu-2'}] />
</template>
```
