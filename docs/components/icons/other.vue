<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Keyboard,
  List,
  Moon,
  OneToOne,
  Pic,
  QuestionCircle,
  Service,
  Setp,
  Telephone,
  Upload,
  Ask,
  Attachment,
} from '@spruce-hub/icons'

const groupIcons = [
  Keyboard,
  List,
  Moon,
  OneToOne,
  Pic,
  QuestionCircle,
  Service,
  Setp,
  Telephone,
  Upload,
  Ask,
  Attachment,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
