<script setup lang="ts">
import IconList from '../icon-list.vue'
import { AliPay, Moment, Qq, WechatPay, Wechat, Weibo, Zhihu, Email } from '@spruce-hub/icons'

const groupIcons = [AliPay, Moment, Qq, WechatPay, Wechat, Weibo, Zhihu, Email]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
