<script setup lang="ts">
import { BooleanSuccess } from '@spruce-hub/icons'
import { CIcon } from '@spruce-hub/cui'
</script>

<template>
  <CIcon>
    <BooleanSuccess />
  </CIcon>
  <CIcon color="#13c2c2" :size="30">
    <BooleanSuccess />
  </CIcon>
</template>

<style lang="scss" scoped>
.ys-icon {
  font-size: 20px;
  margin: 0 20px;
}
</style>
