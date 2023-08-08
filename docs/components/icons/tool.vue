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
  LeftRightStructure,
  UpDownStructure,
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
  LeftRightStructure,
  UpDownStructure,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
