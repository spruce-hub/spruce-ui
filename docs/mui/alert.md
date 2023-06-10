---
author: Noah Yu
---

# Alert

不可关闭或不会主动关闭的提示信息

## Alert Docs

### 组件类型

`type` 属性指定组件类型，默认值为 `info`

<Preview>
  <AlertBasic />
</Preview>

::: details Code
@[code](../components/alert/Basic.vue)
:::

### 文本内容

`description` 属性接收文本内容

也可以通过 slot 设置文本内容，且 slot 具有最高优先级

<Preview>
  <AlertDescription />
</Preview>

::: details Code
@[code](../components/alert/Description.vue)
:::

### 图标位置

`icon` 属性控制图标所在位置，默认值为 `center`

<Preview>
  <AlertIcon />
</Preview>

::: details Code
@[code](../components/alert/Icon.vue)
:::

### 文本居中

`center` 属性控制文本是否居中，默认值为 `false`

<Preview>
  <AlertCenter />
</Preview>

::: details Code
@[code](../components/alert/Center.vue)
:::

### Loading 状态

`loading` 属性控制 icon 旋转，默认值为 `false`

此属性会修改 icon 为 [Loading.svg](/icons/)，并处于旋转状态

<Preview>
  <AlertLoading />
</Preview>

::: details Code
@[code](../components/alert/Loading.vue)
:::

### 可点击文案

`more` 属性提供额外的可点击的文案

- `more.text` 可点击的文案

- `more.align` 文案对齐方式

`handleMore` 事件接收一个函数，调用该函数可关闭 `Alert`

<Preview>
  <AlertMore />
</Preview>

::: details Code
@[code](../components/alert/More.vue)
:::

### 可关闭按钮

`closable` 属性控制关闭按钮所在位置，默认值为 `null`，即不显示

<Preview>
  <AlertClosable />
</Preview>

::: details Code
@[code](../components/alert/Closable.vue)
:::

### 标题 + 描述

`title` 属性控制是否显示标题

<Preview>
  <AlertTitle />
</Preview>

::: details Code
@[code](../components/alert/Title.vue)
:::

::: warning 注意
当使用 `title` 属性时，`icon`、`center` 属性将失效
:::

## Alert API

### Alert Attributes

| Attributes  | Type                                                  | Default                 | Required | Description           |
| ----------- | ----------------------------------------------------- | ----------------------- | -------- | --------------------- |
| type        | `'success'\|'warning'\|'info'\|'error'`               | `info`                  | 否       | 类型                  |
| title       | `string`                                              | -                       | 否       | 标题                  |
| description | `string`                                              | -                       | 否       | 描述文本              |
| icon        | `'start' \| 'end' \| 'center'`                        | `center`                | 否       | 图标位置              |
| center      | `boolean`                                             | `false`                 | 否       | 文本是否居中          |
| loading     | `boolean`                                             | `false`                 | 否       | 图标处于 loading 状态 |
| more        | `{text: string, align: 'start' \| 'end' \| 'center'}` | `{text: '', align: ''}` | 否       | 可点击的文案          |
| closable    | `'start' \| 'end' \| 'center'`                        | -                       | 否       | 关闭按钮的位置        |

### Alert Events

| Events     | Type                          | Description              |
| ---------- | ----------------------------- | ------------------------ |
| handleMore | `(close: () => void) => void` | 点击 `more` 时触发的事件 |
| close      | `(e: MouseEvent) => void`     | 关闭时触发的事件         |

### Alert Slot

| Name    | Description |
| ------- | ----------- |
| default | 文本内容    |
