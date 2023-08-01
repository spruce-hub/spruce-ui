<script setup lang="ts">
import { ElMessage } from 'element-plus'

import type { DefineComponent } from 'vue'

defineProps<{
  components: Array<DefineComponent>
}>()

const copy = async (name: string) => {
  const comp = `<YIcon><${name} /></YIcon>`
  try {
    await navigator.clipboard.writeText(comp)

    ElMessage({
      message: '已复制',
      type: 'success',
    })
  } catch (err) {
    ElMessage.error('复制失败')
  }
}
</script>

<template>
  <div class="icons">
    <div v-for="icon in components" :key="icon.name" class="icon-list" @click="copy(icon.name)">
      <div class="icon-item">
        <div class="icon">
          <component :is="icon" />
        </div>
        <p class="icon-name">{{ icon.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-top: 1px solid var(--border-color);
  border-left: 1px solid var(--border-color);
  margin-bottom: 20px;
}
.icon-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 14px;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;

  &:hover {
    color: var(--theme-color);
  }
}
.icon {
  text-align: center;
  svg {
    width: 30px;
    height: 30px;
  }
}
.icon-name {
  overflow: hidden;
  width: 110px;
  font-size: 12px !important;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin: 6px 0 0 !important;
}
</style>
