<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  ArrowBack,
  CaretBottom,
  CaretTop,
  ArrowDown,
  GoBack,
  ArrowLeft,
  ArrowRadius,
  ArrowRight,
  ArrowUp,
} from '@spruce-hub/icons'

const groupIcons = [
  ArrowBack,
  CaretBottom,
  CaretTop,
  ArrowDown,
  GoBack,
  ArrowLeft,
  ArrowRadius,
  ArrowRight,
  ArrowUp,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
