<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Cart,
  Delivered,
  Receiving,
  WaitDeliver,
  InProcess,
  Basket,
  ShoppingBag,
  Integral,
} from '@spruce-hub/icons'

const groupIcons = [
  ShoppingBag,
  Basket,
  Cart,
  Delivered,
  InProcess,
  Receiving,
  WaitDeliver,
  Integral,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
