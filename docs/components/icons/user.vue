<script setup lang="ts">
import IconList from '../icon-list.vue'
import { User, UserCircle, UserFilled, UserLeave, UserVerified } from '@spruce-hub/icons'

const groupIcons = [User, UserCircle, UserFilled, UserLeave, UserVerified]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
