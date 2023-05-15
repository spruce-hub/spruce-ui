<template>
  <el-button type="primary" @click="toggleShow">toolbar</el-button>
  <CFilePreview v-model:visible="show" :file-url="fileUrlArr[cur]" :toolbar-style="toolbarStyle">
    <template #toolbar>
      <el-button text :disabled="cur === 0" @click="cur--">
        <CIcon>
          <ArrowLeft />
        </CIcon>
      </el-button>
      <el-button text :disabled="cur === fileUrlArr.length - 1" @click="cur++">
        <CIcon>
          <ArrowRight />
        </CIcon>
      </el-button>
    </template>
  </CFilePreview>
</template>

<script setup lang="ts">
import { CSSProperties, ref } from 'vue'
import { ArrowLeft, ArrowRight } from '@spruce-hub/icons'

const show = ref(false)
const cur = ref(0)
const fileUrlArr = ref([
  'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/675b18b5-f59a-4340-938e-cae3fcf72cce.png',
  'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/d4676d87-2f97-4df2-90d1-2194d25d2a5b.jpg',
])

const toolbarStyle = ref<CSSProperties>({
  position: 'absolute',
  bottom: '32px',
  width: '144px',
  display: 'flex',
  justifyContent: 'space-between',
  background: 'rgb(131 132 137)',
})
function toggleShow() {
  show.value = !show.value
}
</script>

<style lang="scss" scoped></style>
