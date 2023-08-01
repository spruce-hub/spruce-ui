<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Finished,
  Invoice,
  Ordered,
  ToBeConfirmed,
  WriteApplication,
  Audit,
  OrderCancel,
  Date,
} from '@spruce-hub/icons'

const groupIcons = [
  Finished,
  Invoice,
  Ordered,
  ToBeConfirmed,
  WriteApplication,
  Audit,
  OrderCancel,
  Date,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
