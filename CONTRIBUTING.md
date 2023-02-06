# 贡献代码

## 本地环境

- NodeJS >= 18
- pnpm >= 7
- git >= 2

## 初始化项目

1. 点击右上角的 Fork 按钮，把项目添加到你的账户下
2. 把 Fork 的项目克隆到本地
3. 执行以下命令安装相关依赖

```bash
pnpm install
```

4. 执行以下命令初始化构建项目

```bash
pnpm build
```

## 开发组件

### 创建一个组件

执行以下命名自动创建一个组件所需的目录结构以及文件。

```bash
pnpm create:comp <lib-name> <component-name>
```

- `lib-name`: 组件库类型

  - `cui | mui | icons`

- `component-name`: 组件名称

### 导出组件

在 `packages/*/component.ts` 中导出拥有 `install` 方法的对象。

### 导出组件类型

在 `packages/*/global.d.ts` 声明文件内导出组件类型。

### 加载组件样式

在 `packages/*/styles/component.scss` 加载组件样式

### 组件预览

> 开发过程中你需要预览或调试你的组件

执行以下命令启动一个组件预览服务，默认运行在 http://localhost:3000

```bash
pnpm dev
```

接下来在 `preview/src/App.vue` 中使用组件，注意使用 `<Preview />` 组件包裹。

```html
<script setup lang="ts">
  import { CAlert } from '@spruce/cui/index'
  import Preview from './components/Preview.vue'
</script>

<template>
  <Preview>
    <CAlert type="success" description="success alert" closable="center" />
    <CAlert type="warning" description="warning alert" closable="center" />
    <CAlert type="error" description="error alert" closable="center" />
    <CAlert type="info" description="info alert" closable="center" />
  </Preview>
</template>

<style lang="scss" scoped>
  .c-alert {
    margin: 5px 0;
  }
</style>
```

### 单元测试

> 为保障组件稳定性，你应该确保组件通过了全面的、严谨的单元测试

在开发前期，如果你对你要开发的组件做了充足的准备工作（交互规划、API 规划等），那么在你动手实现组件前就可以先编写好测试用例，此时测试用例就是你实现组件的标准。

当然如果你在实现过程偶尔会添加一些新的想法，也可以先实现组件再编写测试用例。

Spruce UI 采用 [Vitest](https://cn.vitest.dev) 作为单元测试框架，以下是基础命令：

```bash
pnpm vitest # 执行单元测试

pnpm vitest:c # 执行单元测试并输出覆盖率文件

pnpm vitest:u # 执行单元测试并输出覆盖率文件以及启用UI视图
```

## 编写文档

当你的组件编码完成并通过了单元测试后，还需提供一份文档帮助开发者快速熟悉并使用该组件。

文档位于 `/docs` 目录下，文档使用 [VuePress](https://v2.vuepress.vuejs.org/zh/) 框架以及 Markdown 语法编写。

文档应当包含详细的使用示例以及 API 描述。

### 打包组件

编写文档前需打包组件。

```bash
pnpm build
```

打包好的组件已经在 [VuePress](https://v2.vuepress.vuejs.org/zh/advanced/cookbook/usage-of-client-config.html#注册-vue-组件) 中全局注册，你可以在 `.md` 文件中直接使用

### 使用示例

> 在文档中展示组件效果以及相关代码

执行以下命令开启一个本地服务。

```bash
pnpm docs:dev
```

在 `docs/components` 目录下创建示例组件，以大写字母开头，vuepress 会自动把组件注册到全局。

例如：`components/alert/Basic.vue`

```html
<template>
  <CAlert type="success" description="success alert" />
  <CAlert type="warning" description="warning alert" />
  <CAlert type="error" description="error alert" />
  <CAlert type="info" description="info alert" />
</template>

<style lang="scss" scoped>
  .c-alert {
    margin: 20px 0 0;
    font-size: 16px;
  }
  .c-alert:first-child {
    margin: 0;
  }
</style>
```

将会得到组件 `<AlertBasic />`

在 markdown 文件中，把该示例组件传入 `<Preview />` 即可展示渲染效果以及相关代码。

```Markdown
<Preview>
  <AlertBasic />
</Preview>

::: details Code
@[code](./Basic.vue)
:::
```

效果如下

![alert](/public/alert.png)

## Icon 图标

> Icons：`packages/icons`

图标库的组件代码打包时自动生成，无需自行开发。

所有的 SVG 图片最终都会生成同名的 \*.vue 文件，并且拥有以大写字母开头的同名组件名称。

`svg/success.svg => <Success />`

### SVG 图片规格

为了使所有 SVG 图片规格尽量保持相同，打包时会自动对 SVG 图片做一次处理，所以每次提交 SVG 图片之前需要打包并验证效果之后再提交。

## 提交代码

### Commit Message

`commit message` 应该具有良好的引导作用，确保每一个 `commit message` 仅对应一个功能点的修改。

### 推送 PR

把你的代码推送到你账户下的项目中后，向源仓库的 `dev` 分支推送 PR。

### 等待审核

审核过程请关注审核动态，协助审核员修复或说明相关问题。

最后等待管理员审核通过后，你贡献的组件将在下一个合适的版本中发布。
