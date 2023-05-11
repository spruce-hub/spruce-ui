<script setup lang="ts">
import * as groupIcon from '@spruce-hub/icons/components/boolean'
</script>

<template>
  <div class="icons">
    <div v-for="icon in groupIcon" :key="icon.name" class="icon-list">
      <div class="icon-item">
        <div class="icon">
          <component :is="icon" />
        </div>
        <span>{{ icon.name }}</span>
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
</style>
