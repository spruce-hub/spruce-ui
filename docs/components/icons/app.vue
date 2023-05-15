<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  AppAliPay,
  AppMoment,
  AppQq,
  AppWechatPay,
  AppWechat,
  AppWeibo,
  AppZhihu,
} from '@spruce-hub/icons'

const groupIcons = [AppAliPay, AppMoment, AppQq, AppWechatPay, AppWechat, AppWeibo, AppZhihu]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
