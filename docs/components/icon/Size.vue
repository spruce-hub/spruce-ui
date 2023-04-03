<script setup lang="ts">
import { Success } from '@spruce-hub/icons'
import { CIcon } from '@spruce-hub/cui'
</script>

<template>
  <CIcon>
    <Success />
  </CIcon>
  <CIcon color="#13c2c2" :size="30">
    <Success />
  </CIcon>
</template>

<style lang="scss" scoped>
.c-icon {
  font-size: 20px;
  margin: 0 20px;
}
</style>
