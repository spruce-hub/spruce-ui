<script setup lang="ts">
import IconList from '../icon-list.vue'
import { QuestionCircle, Attachment, Email } from '@spruce-hub/icons'

const groupIcons = [QuestionCircle, Attachment, Email]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
