<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Top,
  Right,
  Bottom,
  ArrowBack,
  GoBack,
  GoTo,
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  CaretTop,
  CaretBottom,
  ArrowRadius,
} from '@spruce-hub/icons'

const groupIcons = [
  Top,
  Right,
  Bottom,
  ArrowBack,
  GoBack,
  GoTo,
  ArrowUp,
  ArrowRight,
  ArrowDown,
  ArrowLeft,
  CaretTop,
  CaretBottom,
  ArrowRadius,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
