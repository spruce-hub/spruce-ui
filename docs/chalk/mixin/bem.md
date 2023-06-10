---
author: Noah Yu
---

# BEM

## 使用

```scss
// styles/alert.scss
@use './mixins/mixin' as *;

$block: 'alert';

@include b() {
  --ys-width: 190px;
  box-sizing: border-box;
  width: var(--ys-width);
  background-color: var(--ys-white);
}

@include e('item') {
  width: var(--ys-width);
}

@include m('success') {
  width: var(--ys-width);
}

@include bem('item', 'success') {
  width: var(--ys-width);
}
```

:::warning
变量 `$block` 是必须的
:::

编译后

```css
/* styles/ys-alert.css */
.ys-alert {
  --ys-width: 190px;
  box-sizing: border-box;
  width: var(--ys-width);
  background-color: var(--ys-white);
}

.ys-alert__item {
  width: var(--ys-width);
}

.ys-alert--success {
  width: var(--ys-width);
}

.ys-alert__item--success {
  width: var(--ys-width);
}
```
