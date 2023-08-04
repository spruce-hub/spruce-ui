<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Finished,
  Invoice,
  Ordered,
  ToBeConfirmed,
  OrderCancel,
  WriteApplication,
  Inquiry,
  PendingPay,
  Date,
  Audit,
} from '@spruce-hub/icons'

const groupIcons = [
  Finished,
  Invoice,
  Ordered,
  ToBeConfirmed,
  OrderCancel,
  WriteApplication,
  Inquiry,
  PendingPay,
  Date,
  Audit,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
