<script setup lang="ts">
import type { DefineComponent } from 'vue'
defineProps<{
  components: Array<DefineComponent>
}>()
</script>

<template>
  <div class="icons">
    <div v-for="icon in components" :key="icon.name" class="icon-list">
      <div class="icon-item" :title="icon.name">
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
}
.icon-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 14px;
  border-right: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}
.icon {
  text-align: center;
  svg {
    width: 30px;
    height: 30px;
  }
}
.icon-name {
  width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: center;
  margin: 6px 0 0;
}
</style>
