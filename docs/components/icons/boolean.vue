<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  CloseBold,
  CloseCircleFilled,
  Close,
  Select,
  Success,
  Warning,
  Follow,
  FollowFilled,
} from '@spruce-hub/icons'

const groupIcons = [
  CloseBold,
  CloseCircleFilled,
  Close,
  Select,
  Success,
  Warning,
  Follow,
  FollowFilled,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
