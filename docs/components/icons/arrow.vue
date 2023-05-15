<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  ArrowBack,
  ArrowCaretBottom,
  ArrowCaretTop,
  ArrowDown,
  ArrowGoBack,
  ArrowLeft,
  ArrowRadius,
  ArrowRight,
  ArrowUp,
} from '@spruce-hub/icons'

const groupIcons = [
  ArrowBack,
  ArrowCaretBottom,
  ArrowCaretTop,
  ArrowDown,
  ArrowGoBack,
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
