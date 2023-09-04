<script setup lang="ts">
import IconList from '../icon-list.vue'
import { QuestionCircle, Attachment, Cooperation, Tool } from '@spruce-hub/icons'

const groupIcons = [QuestionCircle, Attachment, Cooperation, Tool]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
