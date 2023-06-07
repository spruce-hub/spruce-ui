<template>
  <n-dropdown
    trigger="hover"
    :options="options"
    placement="right-start"
    :to="false"
    @select="handleSelect"
  >
    <i :class="bem('item__btn__more')">
      <More />
    </i>
  </n-dropdown>
</template>
<script lang="ts" setup>
import { NDropdown } from 'naive-ui'
import { More } from '@spruce-hub/icons'
import { useNamespace } from '@spruce-hub/ui-hooks'
import { DropdownMoreEmits, DropdownMoreProps, HandleUnion } from './operable-list'
defineProps(DropdownMoreProps)
const emit = defineEmits(DropdownMoreEmits)
const { bem } = useNamespace('operable-list')
function handleSelect(key: HandleUnion) {
  emit('select', key)
}
</script>
