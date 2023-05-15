<script setup lang="ts">
import IconList from '../icon-list.vue'
import { OrderCart, OrderDelivered, OrderReceiving, OrderWaitDeliver } from '@spruce-hub/icons'

const groupIcons = [OrderCart, OrderDelivered, OrderReceiving, OrderWaitDeliver]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
