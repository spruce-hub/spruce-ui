<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  BooleanCloseBold,
  BooleanCloseCircleFilled,
  BooleanClose,
  BooleanSelect,
  BooleanSuccess,
  BooleanWarning,
} from '@spruce-hub/icons'

const groupIcons = [
  BooleanCloseBold,
  BooleanCloseCircleFilled,
  BooleanClose,
  BooleanSelect,
  BooleanSuccess,
  BooleanWarning,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
