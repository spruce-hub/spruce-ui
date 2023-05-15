<script setup lang="ts">
import IconList from '../icon-list.vue'
import { BuildingOrganize } from '@spruce-hub/icons'

const groupIcons = [BuildingOrganize]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
