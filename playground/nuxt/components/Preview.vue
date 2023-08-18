<script setup lang="ts">
import { YIcon, Search } from '@icons/index'
const drawer = ref(false)

const links = [
  {
    name: 'Header Meun',
    linkTo: '/header-menu',
  },
  {
    name: 'YIcon',
    linkTo: '/icon',
  },
]
</script>
<template>
  <header>
    <NuxtLink to="/">
      <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
    </NuxtLink>
    <h1>Spruce UI</h1>
    <YIcon @click="drawer = !drawer"><Search /></YIcon>
    <ClientOnly>
      <el-drawer v-model="drawer" title="组件列表" direction="rtl" :size="200">
        <NuxtLink v-for="item in links" :key="item.name" :to="item.linkTo">{{
          item.name
        }}</NuxtLink>
      </el-drawer>
    </ClientOnly>
  </header>
  <div class="components">
    <slot> </slot>
  </div>
</template>

<style scoped lang="scss">
header {
  width: 100%;
  position: relative;
  a {
    display: block;
    width: 100px;
    height: 100px;
    text-decoration: none;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
  h1 {
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
  .ys-icon {
    font-size: 30px;
    color: var(--ys-primary);
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }
  .el-drawer {
    a {
      display: block;
      box-sizing: border-box;
      width: 100%;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      font-weight: 600;
      color: var(--ys-gray-100);
      padding: 0 10px;
      border-radius: 2px;
      margin-bottom: 20px;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
.components {
  width: 90vw;
  height: 70vh;
  background-color: #f5f5f5;
  border: 1px solid var(--ys-gray-200);
  box-shadow: 0 0 4px 2px var(--ys-gray-400);
  margin: 20px auto;
}
</style>
