<script setup lang="ts">
import IconList from '../icon-list.vue'
import { Finished, Invoice, Ordered, ToBeConfirmed } from '@spruce-hub/icons'

const groupIcons = [Finished, Invoice, Ordered, ToBeConfirmed]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
