<script setup lang="ts">
import { Success, Warning } from '@spruce/icons'
import { CIcon } from '@spruce/cui'
</script>

<template>
  <CIcon color="#13c2c2" :size="30" :component="Success" />

  <!-- Success 无效 -->
  <CIcon color="#ff972f" :size="30" :component="Success">
    <Warning />
  </CIcon>
</template>

<style lang="scss" scoped>
.c-icon {
  font-size: 20px;
  margin: 0 20px;
}
</style>
