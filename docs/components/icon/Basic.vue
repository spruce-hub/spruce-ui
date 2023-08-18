<script setup lang="ts">
import { ref } from 'vue'
import { YIcon, Success } from '@spruce-hub/icons'

const s = ref(20)
const c = ref('--ys-primary')
</script>

<template>
  <YIcon
    text="Spruce UI"
    :size="`${s}px`"
    :css-var="[`--color: var(${c})`, '--text-size: 14px', '--text-color: var(--ys-gray-200)']"
  >
    <Success />
  </YIcon>
</template>

<style lang="scss" scoped>
.ys-icon {
  font-size: 30px;
  margin: 0 20px;
}
</style>
