<template>
  <el-button type="primary" @click="toggleShow">preview</el-button>
  <CFilePreview v-model:visible="show" :file-url="fileUrl" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const fileUrl = ref(
  'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/675b18b5-f59a-4340-938e-cae3fcf72cce.png'
)
function toggleShow() {
  show.value = !show.value
}
</script>

<style lang="scss" scoped></style>
