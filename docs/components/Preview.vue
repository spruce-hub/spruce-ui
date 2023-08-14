<script setup lang="ts"></script>

<template>
  <div class="preview">
    <div class="component">
      <slot> 组件 </slot>
    </div>
    <div class="code"></div>
  </div>
</template>

<style scoped lang="scss">
.preview {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: 4px 4px 0 0;

  :deep(ul) {
    li::marker {
      content: none !important;
    }
  }
}
</style>
