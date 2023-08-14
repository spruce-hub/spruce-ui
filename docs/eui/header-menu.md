---
author: Noah Yu
---

# Header Menu

具有下拉菜单的头部

## Header Menu Docs

### 基础用法

- `navs` 属性接收一组名称以及对应的路由
- `header-left` 插槽接收 Header 的左侧内容
- `header-right` 插槽接收 Header 的右侧内容

<Preview>
  <HeaderMenuSlot />
</Preview>

::: details Code
@[code](../components/header-menu/Slot.vue)
:::

### 菜单

- `header-menu-locker` 插槽接收一组与导航对应的下拉菜单

  - 插槽内的每一个顶级元素与导航栏相同索引元素相对应。

- 提供模板引用

  - 必须为每一个顶级元素提供一个 `ref` 属性，且必须使用相同的值，把该 ref 通过 `menu-locker-refs` prop 传递给 `<EHeaderMenu />`

::: tip
以下例子中，共循环了三个 `class="ys-locker"` 的顶级 `div` 元素，那么导航栏中的 **首页**、**使用指南**、**电商系统** 将分别对应这三个元素中的内容。

其余的导航元素将与没有添加下拉菜单时表现一致
:::

<Preview>
  <HeaderMenuNav />
</Preview>

::: details Code
@[code](../components/header-menu/Nav.vue)
:::

### css 变量

提供以下 css 变量方便修改默认样式

```css
.ys-header-menu {
  --ys-width: 100%;
  --ys-height: 58px;
  --ys-font-color: var(--ys-text);
  --ys-background-color: transparent;
  --ys-font-color-hover: var(--ys-text);
  --ys-background-color-hover: #fff;

  --ys-nav-item-width: auto;
  --ys-nav-item-height: auto;
  --ys-nav-after-visibility: hidden;
  --ys-nav-after-opacity: 0;
  --ys-nav-after-left: none;
  --ys-nav-after-transition: opacity 0.25s;
  --ys-nav-after-background-color: rgba(180, 180, 180, 0.5);
  --ys-nav-after-background-radius: 4px;

  --ys-nav-locker-padding: 20px;
  --ys-nav-locker-background-color: #fff;
  --ys-nav-locker-pointer-events: none;
}
```

## Alert API

### Alert Attributes

| Attributes     | Type                                     | Default | Required | Description        |
| -------------- | ---------------------------------------- | ------- | -------- | ------------------ |
| navs           | `Array<{value: string; linkTo: string}>` |         | 是       | 导航栏             |
| menuLockerRefs | `Array<HTMLElement>`                     | `null`  | 否       | 下拉菜单的模板引用 |

### Alert Slot

| Name                 | Description                      |
| -------------------- | -------------------------------- |
| `header-left`        | Header 的左侧内容                |
| `header-right`       | Header 的右侧内容                |
| `header-menu-locker` | 与 Header 导航栏相对应的下拉菜单 |
