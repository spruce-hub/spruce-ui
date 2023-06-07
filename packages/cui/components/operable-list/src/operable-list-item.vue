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
import { OperableListItemEmits, OperableListItemProps } from './operable-list'
defineProps(OperableListItemProps)
const emit = defineEmits(OperableListItemEmits)

const { bem, is } = useNamespace('operable-list')
</script>
