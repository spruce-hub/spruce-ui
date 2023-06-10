<template>
  <div :class="[bem('item')]">
    <span :class="[bem('item__name'), is({ disabled })]" :title="value" @click="emit('nameClick')">
      <CIcon v-if="disabled" :size="14" :class="bem('item__name__status')">
        <Disable />
      </CIcon>
      {{ value }}
    </span>
    <span :class="bem('item__btn')" @click.stop>
      <slot name="handle"> </slot>
    </span>
  </div>
</template>
<script lang="ts" setup>
import { Disable } from '@spruce-hub/icons'
import { useNamespace } from '@spruce-hub/ui-hooks'
import { CIcon } from '@cui/components'
defineProps({
  value: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['nameClick'])

const { bem, is } = useNamespace('operable-list')
</script>
