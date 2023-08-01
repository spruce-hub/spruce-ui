---
author: Noah Yu
---

# Icon

为 [SVG 图标](/icons/) 提供一个规范的宿主环境

## Icon Docs

### 图标颜色

`color` 属性指定图标的色彩值，默认继承父元素

`color` 的值需符合以下格式

```ts
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgba(${string},${string},${string},${string}`
  | `--ys-${string}`
```

<Preview>
  <IconBasic />
</Preview>

::: details Code
@[code](../components/icon/Basic.vue)
:::

### 图标尺寸

`size` 属性设置图标像素值，默认继承父元素

<Preview>
  <IconSize />
</Preview>

::: details Code
@[code](../components/icon/Size.vue)
:::

### 文案

`text` 属性在图标右侧添加文案

`textColor` 属性设置右侧文案的颜色

<Preview>
  <IconText />
</Preview>

::: details Code
@[code](../components/icon/Text.vue)
:::

### 通过 Props 接收组件

`component` 属性接收一个组件

该属性接收的组件优先级比 `slot` 低

<Preview>
  <IconComponent />
</Preview>

::: details Code
@[code](../components/icon/Component.vue)
:::

## Icon API

### Icon Attributes

| Attributes | Type        | Default | Required | Description |
| ---------- | ----------- | ------- | -------- | ----------- |
| color      | `string`    | -       | 否       | 图标颜色    |
| size       | `number`    | -       | 否       | 图标尺寸    |
| component  | `Component` | `null`  | 否       | icon 组件   |
| text       | `string`    | `null`  | 否       | 文案        |
| textColor  | `string`    | `null`  | 否       | 文案颜色    |

### Icon Slot

| Name    | Description                      |
| ------- | -------------------------------- |
| default | [SVG 图标组件](/icons/list.html) |
