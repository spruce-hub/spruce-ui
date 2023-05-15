<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  DocumentFinished,
  DocumentInvoice,
  DocumentOrdered,
  DocumentToBeConfirmed,
} from '@spruce-hub/icons'

const groupIcons = [DocumentFinished, DocumentInvoice, DocumentOrdered, DocumentToBeConfirmed]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
