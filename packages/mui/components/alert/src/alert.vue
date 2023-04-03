<script setup lang="ts">
import { computed, ref } from 'vue'
import { Success, Warning, Error, Info, Close, Loading } from '@spruce-hub/icons'
import { className } from '@mui/utils'
import { MIcon } from '@mui/components/icon'
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
          <MIcon :class="[bem('icon', icon), ...s({ loading })]">
            <component :is="loading ? Loading : iconComponent" />
          </MIcon>
          <p :class="[e('text')]">
            <slot> {{ description || type }} </slot>
          </p>
        </template>
        <template v-else>
          <MIcon :class="[...s({ loading })]">
            <component :is="loading ? Loading : iconComponent" />
          </MIcon>
          <p :class="[e('title')]">
            {{ title }}
          </p>
          <p :class="[e('text')]">
            <slot> {{ description || type }} </slot>
          </p>
        </template>
      </div>
      <template v-if="more.text">
        <label :class="[e('more'), bem('more', more.align)]" @click="handleMore">
          {{ more.text }}
        </label>
      </template>
      <template v-else-if="closable">
        <MIcon :class="[e('close'), bem('close', closable)]" @click="close">
          <Close />
        </MIcon>
      </template>
    </div>
  </transition>
</template>
