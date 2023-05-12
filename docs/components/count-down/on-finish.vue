<template>
  <ECountDown ref="CountDownRef" :duration="10" @finish="onFinish" />
  <el-button class="ys-button" @click="reset">重置</el-button>
</template>

<script lang="ts" setup>
import { ECountDown } from '@spruce-hub/eui'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

function onFinish() {
  ElMessage({
    message: '这是倒计时回调事件',
    type: 'success',
  })
}

const CountDownRef = ref()
function reset() {
  CountDownRef.value.reset()
}
</script>

<style lang="scss" scoped>
.ys-button {
  margin-left: 20px;
}
</style>
