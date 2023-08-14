# 贡献代码

如果您热爱贡献，如果您乐于赋能，如果您有很多美妙的 idea 渴望与云杉的小伙伴们分享，那么请认真阅读以下内容，以下内容将告诉您如何舒适且标准地为 Spruce UI 做出贡献

## 准备开发环境

| tool   | version |
| ------ | ------- |
| NodeJS | >= 18   |
| pnpm   | >= 8    |
| Git    | >= 2    |

## 克隆存储库

1. 通过点击右上角的 `Fork` 按钮把存储库添加到您的 github
2. 在您的 github 存储库中把项目 clone 到开发环境
3. 执行以下命令初始化项目

```bash
# 进入项目根目录
cd $THE_PROJECT_PATH_YOU_CLONE

# 安装依赖以及执行必要的准备工作
pnpm install
```

## 创建一个组件

### 通过命令快速创建相关目录和文件

我们目前共有三个组件库，分别是

- `@spruce-hub/cui` 适用于 **S/CRM 系统** 的组件库
- `@spruce-hub/eui` 适用于 **电商系统** 的组件库

请明确您需要创建的组件属于哪一类型，我们可以通过命令快速创建所需的目录以及文件，对应的初始化命令分别是：

> `<componentName>` 替换成您的组件名称

```bash
# 创建一个适用于 S/CRM 系统 的组件
pnpm create:comp cui <componentName>

# 适用于 电商系统 的组件
pnpm create:comp eui <componentName>
```

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
  import { CAlert } from '@spruce-hub/cui/index'
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
  .ys-alert {
    margin: 5px 0;
  }
</style>
```

## 开发规范

通过以上步骤之后，您的项目中已有一个组件的雏形了，接下来将介绍统一的开发规范，我们统一开发规范的目的是为了让组件库代码的迭代有个良性的循环，帮助更多的人快速适应且能读懂代码。

### class 命名规范

#### `namespace-block__element--modifier`

- `namespace` 统一的命名空间 `ys` 意为：云杉
- `-block` 代表组件名称
- `__element` 代表元素名称
- `--modifier` 代表状态

🌰 `<div class="ys-alert"></div>`

🌰 `<div class="ys-alert__bottom"></div>`

🌰 `<div class="ys-alert__bottom__icon--show"></div>`

在组件中，我们通过 hook 声明 class

```ts
import { className } from '@spruce-hub/ui-hooks'

const { bem } = className('alert')
```

```html
<!-- .ys-alert -->
<div :class="bem()"></div>

<!-- .ys-alert__bottom -->
<div :class="bem('bottom')"></div>

<!-- .ys-alert__bottom__icon--show -->
<div :class="bem('bottom__icon', 'show')"></div>
```

其中，`namespace` 和 `block` 是必须的，`element` 和 `modifier` 是可选的

#### `namespace-is-modifier`

- `namespace` 统一的命名空间 `ys` 意为：云杉
- `-is` 系动词
- `--modifier` 某种动作或某种动作之后得到的状态

🌰 `<div class="ys-is-checked"></div>`

在组件中，我们通过 hook 声明 class

```ts
import { className } from '@spruce-hub/ui-hooks'

const { is } = className('alert')
```

```html
<!-- .ys-is-fouce -->
<div :class="is('focus')"></div>
```

### 文件及文件夹 命名规范

统一采用短横线命名法，例如`base-table`、`input-number`。

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

在 `docs/components` 目录下创建示例组件，vuepress 会自动把组件注册到全局。

例如：`components/alert/basic.vue`

```html
<template>
  <CAlert type="success" description="success alert" />
  <CAlert type="warning" description="warning alert" />
  <CAlert type="error" description="error alert" />
  <CAlert type="info" description="info alert" />
</template>

<style lang="scss" scoped>
  .ys-alert {
    margin: 20px 0 0;
    font-size: 16px;
  }
  .ys-alert:first-child {
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

![alert](https://oss.sprucefe.com/spruce-ui/docs/alert.png)

## 提交代码

### Commit Message

`commit message` 应该具有良好的引导作用，确保每一个 `commit message` 仅对应一个功能点的修改。

### 推送 PR

把你的代码推送到你账户下的项目中后，向源仓库的 `main` 分支推送 PR。

### 等待审核

审核过程请关注审核动态，协助审核员修复或说明相关问题。

最后等待管理员审核通过后，你贡献的组件将在下一个合适的版本中发布。
