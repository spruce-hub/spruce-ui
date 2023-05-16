<template>
  <CFilePreview v-model:visible="show" :file-url="fileUrl">
    <el-button type="primary" @click="toggleShow">defaultSlot</el-button>
    <template #close>
      <el-button>closeSlot</el-button>
    </template>
  </CFilePreview>
  <CFilePreview v-model:visible="errorShow" file-url="">
    <el-button type="danger" @click="toggleErrorShow">errorSlot</el-button>
    <template #error> <div class="errorSlot">errorSlot</div> </template>
  </CFilePreview>
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

const errorShow = ref(false)
function toggleErrorShow() {
  errorShow.value = !errorShow.value
}
</script>

<style lang="scss" scoped>
.errorSlot {
  height: 350px;
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
</style>
