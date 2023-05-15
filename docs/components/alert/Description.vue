<template>
  <CAlert type="success" description="使用 description 属性" />
  <CAlert type="warning">使用 slot</CAlert>
  <CAlert type="error" description="error alert">description 属性失效</CAlert>
  <CAlert type="info" description="info alert">
    <template #default> description 属性失效 </template>
  </CAlert>
</template>

<style lang="scss" scoped>
.ys-alert {
  margin: 20px 0 0;
}
.ys-alert:first-child {
  margin: 0;
}
</style>
