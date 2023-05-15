<script setup lang="ts">
import { BooleanSuccess, BooleanWarning } from '@spruce-hub/icons'
import { CIcon } from '@spruce-hub/cui'
</script>

<template>
  <CIcon color="#13c2c2" :size="30" :component="BooleanSuccess" />

  <!-- Success 无效 -->
  <CIcon color="#ff972f" :size="30" :component="BooleanSuccess">
    <BooleanWarning />
  </CIcon>
</template>

<style lang="scss" scoped>
.ys-icon {
  font-size: 20px;
  margin: 0 20px;
}
</style>
