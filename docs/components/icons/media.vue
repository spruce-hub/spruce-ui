<script setup lang="ts">
import IconList from '../icon-list.vue'
import { Phone, Telephone, Pic, Service, Keyboard } from '@spruce-hub/icons'

const mediaIcons = [Phone, Telephone, Pic, Service, Keyboard]
</script>

<template>
  <IconList :components="mediaIcons" />
</template>

<style lang="scss" scoped></style>
