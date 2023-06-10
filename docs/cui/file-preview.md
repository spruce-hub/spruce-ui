---
author: JayCC1
---

# FilePreview

预览在线文件

可预览文件类型 [`JPG` | `JPEG` | `PNG` | `JPGE` | `DOC` | `DOCX` | `XLS` | `XLSX` | `PPT` | `PPTX` | `PDF`]

## FilePreview Docs

常用于文件预览。

### 基础用法

<Preview>
  <FilePreviewBase />
</Preview>

::: details Code
@[code](../../components/file-preview/base.vue)
:::

### 插槽

<Preview>
  <FilePreviewSlot />
</Preview>

::: details Code
@[code](../../components/file-preview/slot.vue)
:::

### toolbar

<Preview>
  <FilePreviewToolbar />
</Preview>

::: details Code
@[code](../../components/file-preview/toolbar.vue)
:::

## API

### FilePreview Props

| Attributes         | Type      | Default              | Required | Description                                                                  |
| ------------------ | --------- | -------------------- | -------- | ---------------------------------------------------------------------------- |
| visible            | `boolean` | `false`              | `是`     | 文件预览是否显示                                                             |
| teleportDisabled   | `boolean` | `false`              | `否`     | 是否关闭脱离文档流功能                                                       |
| attachTo           | `string`  | `body`               | `否`     | 将文件预览 `Dom` 传送到指定 `Dom` 结构下（teleportDisable 为 `true` 时失效） |
| fileUrl            | `string`  | `''`                 | `是`     | 需要预览的在线文件的地址                                                     |
| errorBgColor       | `string`  | `rgba(0, 0, 0, 0.6)` | `否`     | 错误提示时的背景颜色                                                         |
| errorIconColor     | `string`  | `#e88420`            | `否`     | 错误提示时 Icon 的颜色                                                       |
| imageWrapperStyle  | `string`  | `{}`                 | `否`     | 图片预览时布局的样式                                                         |
| imageStyle         | `string`  | `{}`                 | `否`     | 图片的样式                                                                   |
| officeWrapperStyle | `string`  | `{}`                 | `否`     | 文档预览时布局时的样式                                                       |
| officeStyle        | `string`  | `{}`                 | `否`     | 文档的样式                                                                   |
| toolbarStyle       | `string`  | `{}`                 | `否`     | toolbar 插槽容器的样式                                                       |

### FilePreview Events

| Events         | Type                                    | Description              |
| -------------- | --------------------------------------- | ------------------------ |
| beforeClose    | `(e: MouseEvent) => void`               | 关闭前回调               |
| update:visible | `(val: boolean, e: MouseEvent) => void` | 点击关闭后执行的回调函数 |

### FilePreview Slot

| **Name** | **Description**              |
| -------- | ---------------------------- |
| default  | 组件默认显示的内容           |
| close    | 组件预览时遮罩层 关闭 的内容 |
| error    | 组件预览 错误 时显示的内容   |
