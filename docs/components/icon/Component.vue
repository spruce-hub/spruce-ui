<script setup lang="ts">
import { YIcon, Success, Warning } from '@spruce-hub/icons'
</script>

<template>
  <YIcon color="#13c2c2" :size="30" :component="Success" />

  <!-- Success 无效 -->
  <YIcon color="#ff972f" :size="30" :component="Success">
    <Warning />
  </YIcon>
</template>

<style lang="scss" scoped>
.ys-icon {
  font-size: 20px;
  margin: 0 20px;
}
</style>
