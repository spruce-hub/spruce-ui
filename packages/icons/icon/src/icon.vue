<script setup lang="ts">
import { computed } from 'vue'

import { iconProps } from './icon'

import type { CSSProperties } from 'vue'

const props = defineProps(iconProps)

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) {
    return {}
  }

  return {
    fontSize: `${props.size}px`,
    '--color': props.color,
    '--text-color': props.textColor,
  }
})
</script>

<template>
  <span class="ys-icon" :style="style">
    <i class="ys-icon__svg">
      <slot>
        <component :is="component" />
      </slot>
    </i>
    <span v-if="text" class="ys-icon__text">{{ text }}</span>
  </span>
</template>
