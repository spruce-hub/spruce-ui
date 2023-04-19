<script setup lang="ts">
import { computed } from 'vue'

import { className } from '@eui/utils'

import { iconProps } from './icon'

import type { CSSProperties } from 'vue'

const props = defineProps(iconProps)

const { b } = className('icon')

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) {
    return {}
  }

  return {
    fontSize: `${props.size}px`,
    '--color': props.color,
  }
})
</script>

<template>
  <i :class="[b()]" :style="style">
    <slot>
      <component :is="component" />
    </slot>
  </i>
</template>
