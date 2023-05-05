<template>
  <ECountDown :duration="6" :active="isActive" />
  <el-switch v-model="isActive" class="ys-switch" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const isActive = ref(false)
</script>

<style lang="scss" scoped>
.ys-switch {
  margin-left: 20px;
}
</style>
