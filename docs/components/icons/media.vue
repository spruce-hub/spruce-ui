<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  Phone,
  Telephone,
  Pic,
  Service,
  Keyboard,
  Print,
  Email,
  EmailLine,
  Servers,
  VideoLine,
  InProgress,
  ClockLine,
} from '@spruce-hub/icons'

const mediaIcons = [
  Phone,
  Telephone,
  Pic,
  Service,
  Servers,
  Keyboard,
  Print,
  Email,
  EmailLine,
  VideoLine,
  InProgress,
  ClockLine,
]
</script>

<template>
  <IconList :components="mediaIcons" />
</template>

<style lang="scss" scoped></style>
