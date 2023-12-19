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
  ElectronicManual,
  PaperManual,
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
  ElectronicManual,
  PaperManual,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
