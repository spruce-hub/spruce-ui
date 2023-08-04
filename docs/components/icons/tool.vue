<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  FullscreenExit,
  Fullscreen,
  Move,
  ZoomIn,
  ZoomOut,
  SendBackward,
  BringForward,
  SendBack,
  BringFront,
  FontBold,
  FontItalic,
  FontUnberline,
} from '@spruce-hub/icons'

const groupIcons = [
  FullscreenExit,
  Fullscreen,
  Move,
  ZoomIn,
  ZoomOut,
  SendBackward,
  BringForward,
  SendBack,
  BringFront,
  FontBold,
  FontItalic,
  FontUnberline,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
