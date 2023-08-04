<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  List,
  Copy,
  Delete,
  Good,
  Pen,
  PenEditDash,
  PenEdit,
  PlusCircle,
  Plus,
  RadioDot,
  Refresh,
  Upload,
  UploadSimple,
  Set,
  Switch,
  View,
  Search,
  Custom,
  OneToOne,
  ThreeDimensional,
  Calculator,
  Dialog,
  Save,
} from '@spruce-hub/icons'

const groupIcons = [
  List,
  Copy,
  Delete,
  Good,
  Pen,
  PenEditDash,
  PenEdit,
  PlusCircle,
  Plus,
  RadioDot,
  Refresh,
  Upload,
  UploadSimple,
  Set,
  Switch,
  View,
  Search,
  Custom,
  OneToOne,
  ThreeDimensional,
  Calculator,
  Dialog,
  Save,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
