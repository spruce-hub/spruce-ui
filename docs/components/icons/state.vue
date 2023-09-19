<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Close,
  CloseBold,
  CloseCircleLight,
  CloseCircleFilled,
  Check,
  Select,
  CheckCircleLight,
  Success,
  Warning,
  Tips,
  Info,
  Error,
  InProgress,
  Follow,
  FollowFilled,
  Loading,
  Happy,
  Sad,
  Sunny,
  Moon,
  Star,
  Setp,
} from '@spruce-hub/icons'

const groupIcons = [
  Close,
  CloseBold,
  CloseCircleLight,
  CloseCircleFilled,
  Check,
  Select,
  CheckCircleLight,
  Success,
  Warning,
  Tips,
  Info,
  Error,
  InProgress,
  Follow,
  FollowFilled,
  Loading,
  Happy,
  Sad,
  Sunny,
  Moon,
  Star,
  Setp,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
