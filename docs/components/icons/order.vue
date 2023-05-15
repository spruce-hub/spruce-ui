<script setup lang="ts">
import IconList from '../icon-list.vue'
import { Cart, Delivered, Receiving, WaitDeliver } from '@spruce-hub/icons'

const groupIcons = [Cart, Delivered, Receiving, WaitDeliver]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
