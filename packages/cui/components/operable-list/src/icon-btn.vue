<template>
  <n-tooltip placement="top" trigger="hover" size="small">
    <template #trigger>
      <n-button quaternary size="tiny" @click="emit('click')">
        <CIcon :size="12" color="#666666">
          <slot> </slot>
        </CIcon>
      </n-button>
    </template>
    <span>{{ name }}</span>
  </n-tooltip>
</template>
<script lang="ts" setup>
import { CIcon } from '@cui/components'
import { NButton, NTooltip } from 'naive-ui'
defineProps({
  name: {
    type: String,
    required: true,
  },
})
const emit = defineEmits(['click'])
</script>
