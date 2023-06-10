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
import { PropType } from 'vue'
defineProps({
  options: {
    type: Array as PropType<Array<{ label: string; key: string | number }>>,
    required: false,
    default: () => [],
  },
})
const emit = defineEmits(['select'])
const { bem } = useNamespace('operable-list')
function handleSelect(key: 'edit' | 'del' | 'status') {
  emit('select', key)
}
</script>
