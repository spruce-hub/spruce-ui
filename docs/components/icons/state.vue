<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Close,
  CloseBold,
  CloseCircleFilled,
  Check,
  Select,
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
} from '@spruce-hub/icons'

const groupIcons = [
  Close,
  CloseBold,
  CloseCircleFilled,
  Check,
  Select,
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
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
