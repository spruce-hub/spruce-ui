<script setup lang="ts">
import { computed, ref } from 'vue'
import { Success, Warning, Error, Info, Close, Loading } from '@spruce-hub/icons'
import { className } from '@eui/utils'
import { EIcon } from '@eui/components/icon'
import { alertProps, alertEmits } from './alert'

const props = defineProps(alertProps)
const emit = defineEmits(alertEmits)

const iconComponents: { [key: string]: unknown } = {
  success: Success,
  warning: Warning,
  error: Error,
  info: Info,
}
const iconComponent = computed(() => iconComponents[props.type])

const { b, e, m, bem, s } = className('alert')

const visible = ref(true)

const close = (e: MouseEvent) => {
  visible.value = false
  emit('close', e)
}

const handleMore = () => {
  const close = () => {
    visible.value = false
  }
  emit('handleMore', close)
}
</script>

<template>
  <transition name="close">
    <div v-show="visible" :class="[b(), m(type)]" role="alert">
      <div :class="[e('content'), !title ? s({ center }) : bem('content', 'grid')]">
        <template v-if="!title">
          <EIcon :class="[bem('icon', icon), ...s({ loading })]">
            <component :is="loading ? Loading : iconComponent" />
          </EIcon>
          <span :class="[e('text')]">
            <slot> {{ description || type }} </slot>
          </span>
        </template>
        <template v-else>
          <EIcon :class="[...s({ loading })]">
            <component :is="loading ? Loading : iconComponent" />
          </EIcon>
          <span :class="[e('title')]">
            {{ title }}
          </span>
          <span :class="[e('text')]">
            <slot> {{ description || type }} </slot>
          </span>
        </template>
      </div>
      <template v-if="more.text">
        <label :class="[e('more'), bem('more', more.align)]" @click="handleMore">
          {{ more.text }}
        </label>
      </template>
      <template v-else-if="closable">
        <EIcon :class="[e('close'), bem('close', closable)]" @click="close">
          <Close />
        </EIcon>
      </template>
    </div>
  </transition>
</template>
