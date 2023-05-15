<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Copy,
  Delete,
  FullscreenExit,
  Fullscreen,
  Good,
  Move,
  PenEditDash,
  PenEdit,
  PlusCircle,
  Print,
  RadioDot,
  Refresh,
  Save,
  Set,
  Switch,
  View,
  ZoomIn,
  ZoomOut,
} from '@spruce-hub/icons'

const groupIcons = [
  Copy,
  Delete,
  FullscreenExit,
  Fullscreen,
  Good,
  Move,
  PenEditDash,
  PenEdit,
  PlusCircle,
  Print,
  RadioDot,
  Refresh,
  Save,
  Set,
  Switch,
  View,
  ZoomIn,
  ZoomOut,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
