<template>
  <el-button @click="toggleShow" />
  <CFilePreview v-model:visible="show" :file-url="fileUrl">
    <template #toolbar>
      <div class="toolbar">
        <el-button>
          <CIcon />
        </el-button>
      </div>
    </template>
  </CFilePreview>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const fileUrl = ref(
  'https://fx-zfl.oss-cn-hangzhou.aliyuncs.com/202304/6d2d19f7-f6b9-4892-bcaa-fc3a7b047e7d.docx'
)
function toggleShow() {
  show.value = !show.value
}
</script>

<style lang="scss" scoped></style>
