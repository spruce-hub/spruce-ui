---
author: Noah Yu
---

# Icon

为 [SVG 图标](/icons/) 提供一个规范的宿主环境

## Install

### 使用包管理器

::: tabs#pm

@tab pnpm

```bash
pnpm add @spruce-hub/icons@next -P
```

@tab npm

```bash
npm install @spruce-hub/icons@next --save
```

:::

### 导入 CSS

```ts
// main.ts
import '@spruce-hub/icons/dist/styles/index.css'
```

如果您使用 Nuxt

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // ···
  css: ['@spruce-hub/icons/dist/styles/index.css'],
})
```

## Icon Docs

### 通过 Props 接收组件

`component` 属性接收一个组件

该属性接收的组件优先级比 `slot` 低

<Preview>
  <IconComponent />
</Preview>

::: details Code
@[code](../components/icon/Component.vue)
:::

### 文案

`text` 属性在图标右侧添加文案

<Preview>
  <IconText />
</Preview>

::: details Code
@[code](../components/icon/Text.vue)
:::

### 样式

#### 使用 css 属性

`color` `size` 设置 icon 的 `color` 与 `font-size`，当 `font-size` 为 `number` 类型时，以 `px` 为单位

`text-color` `text-size` 设置 [文案](#文案) 的 `color` 与 `font-size`，当 `font-size` 为 `number` 类型时，以 `px` 为单位

```ts
// 对应的类型
type Color =
  | `#${string}`
  | `rgb(${string},${string},${string})`
  | `rgba(${string},${string},${string},${string})`
  | `var(${string})`

type FontSize = `${number}px` | `${number}em` | `var(${string})` | number
```

#### 使用 css 变量

`css-var` 可以通过 css 变量修改样式，其中 `font-size` `text-size` 不支持 `number` 类型

```ts
// 对应的类型
type NonNumberFontSize = Exclude<FontSize, number>
type CssVars =
  | `--color: ${Color}`
  | `--font-size: ${NonNumberFontSize}`
  | `--text-color: ${Color}`
  | `--text-size: ${NonNumberFontSize}`
```

<Preview>
  <IconBasic />
</Preview>

::: details Code
@[code](../components/icon/Basic.vue)
:::

## Icon API

### Icon Attributes

| Attributes | Type        | Default | Required | Description |
| ---------- | ----------- | ------- | -------- | ----------- |
| color      | `string`    | -       | 否       | 图标颜色    |
| size       | `number`    | -       | 否       | 图标尺寸    |
| component  | `Component` | `null`  | 否       | icon 组件   |
| text       | `string`    | -       | 否       | 文案        |
| textColor  | `string`    | -       | 否       | 文案颜色    |
| textSize   | `string`    | -       | 否       | 文案字号    |
| cssVar     | `string[]`  | `[]`    | 否       | css 变量    |

### Icon Slot

| Name    | Description                      |
| ------- | -------------------------------- |
| default | [SVG 图标组件](/icons/list.html) |
