<script setup lang="ts">
const more = () => {
  alert('更多内容')
}

const moreClose = (close: () => void) => {
  close()
  alert('关闭 Alert')
}
</script>

<template>
  <CAlert
    type="success"
    description="success alert"
    :more="{ text: '查看更多', align: 'center' }"
    @handle-more="more"
  />
  <CAlert
    type="warning"
    description="warning alert"
    :more="{ text: '会关闭的', align: 'center' }"
    @handle-more="moreClose"
  />
</template>

<style lang="scss" scoped>
.c-alert {
  margin: 20px 0 0;
}
.c-alert:first-child {
  margin: 0;
}
</style>
