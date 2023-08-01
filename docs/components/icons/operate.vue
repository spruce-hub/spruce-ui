<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Copy,
  Delete,
  FullscreenExit,
  Fullscreen,
  Move,
  Good,
  PenEditDash,
  PenEdit,
  PlusCircle,
  Plus,
  Print,
  RadioDot,
  Refresh,
  Save,
  Set,
  Switch,
  View,
  ZoomIn,
  ZoomOut,
  Search,
  SendBackward,
  BringForward,
  SendBack,
  BringFront,
  Custom,
  FontBold,
  FontItalic,
  FontUnberline,
} from '@spruce-hub/icons'

const groupIcons = [
  Copy,
  Delete,
  FullscreenExit,
  Fullscreen,
  Move,
  Good,
  PenEditDash,
  PenEdit,
  PlusCircle,
  Plus,
  Print,
  RadioDot,
  Refresh,
  Save,
  Set,
  Switch,
  View,
  ZoomIn,
  ZoomOut,
  Search,
  SendBackward,
  BringForward,
  SendBack,
  BringFront,
  Custom,
  FontBold,
  FontItalic,
  FontUnberline,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
