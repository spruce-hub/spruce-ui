<script setup lang="ts">
import { computed } from 'vue'

import { iconProps } from './icon'

import type { CSSProperties } from 'vue'

const props = defineProps(iconProps)
const iconStyle = computed<CSSProperties>(() => {
  const style: { [key: string]: string } = {}

  if (typeof props?.size === 'number') {
    style.fontSize = `${props.size}px`
  } else if (
    typeof props?.size === 'string' &&
    (props.size.endsWith('px') || props.size.endsWith('em'))
  ) {
    style.fontSize = props.size
  }

  if (props.color) {
    style.color = props.color
  }

  return style
})
const textStyle = computed<CSSProperties>(() => {
  const style: { [key: string]: string } = {}

  if (typeof props?.textSize === 'number') {
    style.fontSize = `${props.textSize}px`
  } else if (
    typeof props?.textSize === 'string' &&
    (props.textSize.endsWith('px') || props.textSize.endsWith('em'))
  ) {
    style.fontSize = props.textSize
  }

  if (props.textColor) {
    style.color = props.textColor
  }

  return style
})
</script>

<template>
  <span :class="['ys-icon', { 'ys-icon--rtl': rtl }]" :style="[iconStyle, cssVar]">
    <i class="ys-icon__svg">
      <slot>
        <component :is="component" />
      </slot>
    </i>
    <span v-if="text" class="ys-icon__text" :style="textStyle">{{ text }}</span>
  </span>
</template>
