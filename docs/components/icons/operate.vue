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
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
