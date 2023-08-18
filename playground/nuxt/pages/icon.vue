<script setup lang="ts">
import { YIcon, Pen } from '@icons/index'

const s = ref(14)
const c = ref('000')
</script>

<template>
  <YIcon text="Spruce UI" :size="`${s}px`" :css-var="[`--color: #${c}`, '--text-size: 20px']"
    ><Pen
  /></YIcon>
</template>

<style lang="scss" scoped></style>
