<script setup lang="ts">
import { ref } from 'vue'
import { EHeaderMenu } from '@spruce-hub/eui'
import { YIcon, User } from '@spruce-hub/icons'

const navLockerRefs = ref()
const navs = [
  { value: '首页', linkTo: '/' },
  { value: '使用指南', linkTo: '/guide' },
  { value: '电商系统', linkTo: '/eui' },
  { value: '图标库', linkTo: '/icons' },
  { value: '样式库', linkTo: '/chalk' },
  { value: '不是路由', linkTo: '' },
]
const lockers = ['首页', '使用指南', '电商系统']
</script>

<template>
  <div class="ys-header">
    <EHeaderMenu :navs="navs" :menu-locker-refs="navLockerRefs">
      <template #header-left>
        <div class="ys-logo">
          <img src="https://oss.sprucefe.com/spruce-ui/logo/logo.png" alt="logo" />
        </div>
      </template>
      <template #header-menu-locker>
        <div v-for="item in lockers" :key="item" ref="navLockerRefs" class="ys-locker">
          <p>{{ item }}</p>
        </div>
      </template>
      <template #header-right>
        <div class="ys-right">
          <YIcon :size="20"><User /></YIcon>
        </div>
      </template>
    </EHeaderMenu>
  </div>
</template>

<style lang="scss" scoped>
.ys-header {
  width: 100%;
  height: 300px;
  background-image: url('https://oss.sprucefe.com/spruce-ui/docs/header-menu-banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.ys-header-menu {
  --ys-font-color: #fff;
  padding: 0 10px;
}
.ys-logo {
  display: flex;
  align-items: center;
  height: 100%;
  img {
    height: 40px;
  }
}
.ys-locker {
  p {
    width: 100%;
    line-height: 30px;
    text-align: center;
    background-color: #f5f5f5;
  }
}
.ys-right {
  display: flex;
  align-items: center;
  height: 58px;
}
</style>
