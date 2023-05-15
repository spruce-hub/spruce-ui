<template>
  <CAlert type="success" icon="start">
    Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 JavaScript 框架。 它基于标准 HTML、CSS
    和 JavaScript 构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。
    无论是简单还是复杂的界面，Vue 都可以胜任。
  </CAlert>
  <CAlert type="warning" description="icon center" icon="center">
    基于标准 HTML、CSS 和 JavaScript 构建，提供容易上手的 API 和一流的文档。
    经过编译器优化、完全响应式的渲染系统，几乎不需要手动优化。
    丰富的、可渐进式集成的生态系统，可以根据应用规模在库和框架间切换自如。
  </CAlert>
  <CAlert type="error" description="icon end" icon="end">
    Vue 是一个框架，也是一个生态。其功能覆盖了大部分前端开发常见的需求。 但 Web
    世界是十分多样化的，不同的开发者在 Web 上构建的东西可能在形式和规模上会有很大的不同。
    考虑到这一点，Vue 的设计非常注重灵活性和“可以被逐步集成”这个特点。
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
