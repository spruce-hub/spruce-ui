<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const radio = ref('CUI')

onMounted(async () => {
  const { iconStore } = await import('../.vuepress/store')
  radio.value = iconStore.libType
})

watch(radio, async () => {
  const { iconStore } = await import('../.vuepress/store')
  iconStore.setLibType(radio.value)
})
</script>

<template>
  <div class="ys-icons__header">
    <label>选择您所使用的组件库：</label>
    <el-radio-group v-model="radio" style="--el-color-primary: #0bc39d">
      <el-radio label="CUI" size="large">CUI</el-radio>
      <el-radio label="EUI" size="large">EUI</el-radio>
      <el-radio label="MUI" size="large">MUI</el-radio>
    </el-radio-group>
  </div>
</template>

<style lang="scss" scoped>
.ys-icons__header {
  display: flex;
  align-items: center;
}
.ys-icons__header-item {
  display: flex;
  align-items: center;
  margin-right: 40px;

  p {
    margin: 0;
    margin-right: 5px;
  }
}
</style>
