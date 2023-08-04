<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  AliPay,
  AliPayText,
  Wechat,
  WechatPay,
  WechatPayText,
  Moment,
  Qq,
  Weibo,
  Zhihu,
  Ask,
} from '@spruce-hub/icons'

const groupIcons = [
  AliPay,
  AliPayText,
  Wechat,
  WechatPay,
  WechatPayText,
  Moment,
  Qq,
  Weibo,
  Zhihu,
  Ask,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
