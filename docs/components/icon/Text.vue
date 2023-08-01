<script setup lang="ts">
import { YIcon, Success } from '@spruce-hub/icons'
</script>

<template>
  <YIcon color="#13c2c2" :size="14" text="确认">
    <Success />
  </YIcon>
  <YIcon color="#13c2c2" :size="14" text="改变颜色" text-color="#f00">
    <Success />
  </YIcon>
</template>

<style lang="scss" scoped>
.ys-icon {
  font-size: 20px;
  margin: 0 20px;
}
</style>
