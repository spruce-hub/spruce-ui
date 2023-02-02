---
author: Noah Yu
---

# Icon

为 [SVG 图标](/components/icons/) 提供一个规范的宿主环境

## Icon Docs

### 图标颜色

`color` 属性指定图标的色彩值，默认继承父元素

`color` 的值需符合以下格式

```ts
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgba(${string},${string},${string},${string}`
  | `--c-${string}`
```

<Preview>
  <IconBasic />
</Preview>

::: details Code
@[code](./Basic.vue)
:::

### 图标尺寸

`size` 属性设置图标像素值，默认继承父元素

<Preview>
  <IconSize />
</Preview>

::: details Code
@[code](./Size.vue)
:::

### 通过 Props 接收组件

`component` 属性接收一个组件

该属性接收的组件优先级比 `slot` 低

<Preview>
  <IconComponent />
</Preview>

::: details Code
@[code](./Component.vue)
:::

## Icon API

### Icon Attributes

| Attributes | Type        | Default | Required | Description  |
| ---------- | ----------- | ------- | -------- | ------------ |
| color      | `string`    | -       | 否       | 图标颜色     |
| size       | `number`    | -       | 否       | 图标尺寸     |
| component  | `Component` | `null`  | 否       | 接收一个组件 |

### Icon Slot

| Name    | Description  |
| ------- | ------------ |
| default | SVG 图标组件 |
