<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  BringForward,
  BringFront,
  Custom,
  Date,
  Error,
  FontBold,
  FontItalic,
  FontUnberline,
  InProgress,
  Info,
  Keyboard,
  List,
  Loading,
  Location,
  Moon,
  OneToOne,
  Pic,
  QuestionCircle,
  SendBack,
  SendBackward,
  Service,
  Setp,
  Sunny,
  Telephone,
  Tips,
  Upload,
  Happy,
  Sad,
  Ask,
  Attachment,
} from '@spruce-hub/icons'

const groupIcons = [
  BringForward,
  BringFront,
  Custom,
  Date,
  Error,
  FontBold,
  FontItalic,
  FontUnberline,
  InProgress,
  Info,
  Keyboard,
  List,
  Loading,
  Location,
  Moon,
  OneToOne,
  Pic,
  QuestionCircle,
  SendBack,
  SendBackward,
  Service,
  Setp,
  Sunny,
  Telephone,
  Tips,
  Upload,
  Happy,
  Sad,
  Ask,
  Attachment,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
