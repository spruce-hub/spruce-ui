<template>
  <ECountDown ref="CountDownRef" :duration="10" @finish="onFinish" />
  <el-button class="ys-button" @click="reset">重置</el-button>
</template>

<script lang="ts" setup>
import { ECountDown } from '@spruce-hub/eui'
import { ref } from 'vue'

function onFinish() {
  alert('这是倒计时回调事件')
}

const CountDownRef = ref('CountDownRef')
function reset() {
  CountDownRef.value.reset()
}
</script>

<style lang="scss" scoped>
.ys-button {
  margin-left: 20px;
}
</style>
