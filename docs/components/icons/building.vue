<script setup lang="ts">
import IconList from '../icon-list.vue'
import { Organize, OrganizeLine, Building } from '@spruce-hub/icons'

const groupIcons = [Organize, OrganizeLine, Building]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
