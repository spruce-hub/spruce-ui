<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  List,
  Copy,
  CopySimple,
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
  Download,
  AddToList,
} from '@spruce-hub/icons'

const groupIcons = [
  List,
  Copy,
  CopySimple,
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
  Download,
  AddToList,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
