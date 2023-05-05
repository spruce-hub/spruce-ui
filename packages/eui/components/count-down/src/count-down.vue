<script setup lang="ts">
import { countDownProps, useCountDown } from './count-down'
import { toRef } from 'vue'

const props = defineProps(countDownProps)

const { time, reset } = useCountDown(toRef(props, 'active'), {
  duration: props.duration,
  onFinish: props.onFinish,
})

defineExpose({
  reset,
})
</script>

<template>{{ time }}S</template>
