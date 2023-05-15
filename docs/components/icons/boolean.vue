<script setup lang="ts">
import IconList from '../icon-list.vue'
import { CloseBold, CloseCircleFilled, Close, Select, Success, Warning } from '@spruce-hub/icons'

const groupIcons = [CloseBold, CloseCircleFilled, Close, Select, Success, Warning]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
