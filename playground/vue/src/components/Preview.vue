<template>
  <header>
    <img width="200" src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
    <h1>Spruce UI</h1>
    <p>基于 Vue 3 的前端组件库</p>
  </header>
  <div class="components">
    <p class="tips">演示你的组件</p>
    <slot> </slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
header {
  margin: 0 auto;
  width: 50vw;
  font-size: 16px;
  text-align: center;
  h1 {
    font-size: 20px;
    font-weight: 600;
  }
}
.components {
  margin: 20px auto;
  box-shadow: 0 0 4px 2px var(--ys-gray-400);
  border: 1px solid #fff;
  padding: 0 20px 20px;
  width: 60vw;
  height: 60vh;
  background-color: var(--ys-gray-600);
  .tips {
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    width: 100%;
    height: 40px;
    color: var(--ys-primary);
    line-height: 40px;
    text-align: center;
  }
}
</style>
