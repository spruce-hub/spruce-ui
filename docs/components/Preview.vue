<template>
  <div class="preview">
    <div class="component">
      <slot> 组件呢? </slot>
    </div>
    <div class="code"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.preview {
  border: 1px solid var(--c-border-dark);
  border-radius: 4px;
  border: 1px solid #fff;
  padding: 20px;
  font: normal normal normal 14px/1.5715 var(--c-font-sans-serif);
  margin-top: 6px;
}
html[data-theme='dark'] .preview {
  border: 1px solid var(--border-color);
}
:deep(p, h1, h2, h3, h4, h5, h6, dl, dd, ul, ol, th, td, button, figure, input, textarea, form) {
  margin: 0;
  padding: 0;
  line-height: 1.5715;
}

:deep(input, select, textarea) {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

:deep(table) {
  border-spacing: 0;
  border-collapse: collapse;
}

:deep(img, input, button, textarea) {
  border: none;
  -webkit-appearance: none;
  appearance: none;
}

:deep(input) {
  text-align: inherit;
}

:deep(textarea) {
  resize: none;
}

:deep(a, h1, h2, h3, h4, h5, h6, input, select, button, option, textarea, optgroup) {
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
  color: inherit;
  outline: none;
}

:deep(a) {
  color: var(--c-turquoise);
  text-decoration: none;
}

:deep(ol, ul) {
  list-style: none;
}

:deep(button, input[type='submit'], input[type='button']) {
  cursor: pointer;
}

:deep(input::-moz-focus-inner) {
  padding: 0;
  border: 0;
}

:deep(
    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button
  ) {
  margin: 0;
  -webkit-appearance: none;
  appearance: none;
}

:deep(input::-webkit-input-placeholder, textarea::-webkit-input-placeholder) {
  color: var(--c-gray-600);
}
:deep(input:-moz-placeholder, textarea:-moz-placeholder) {
  color: var(--c-gray-600);
}
:deep(input::-moz-placeholder, textarea::-moz-placeholder) {
  color: var(--c-gray-600);
}
:deep(input:-ms-input-placeholder, textarea:-ms-input-placeholder) {
  color: var(--c-gray-600);
}
</style>
