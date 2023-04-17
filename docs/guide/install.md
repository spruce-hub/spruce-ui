---
author: Noah Yu
---

# 安装

## 环境支持

| ![Edge](https://cdn.jsdelivr.net/npm/@browser-logos/edge@2.0.5/edge_32x32.png) | ![Firefox](https://cdn.jsdelivr.net/npm/@browser-logos/firefox@3.0.9/firefox_32x32.png) | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome@2.0.0/chrome_32x32.png) | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari@2.1.0/safari_32x32.png) |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| Edge ≥ 79                                                                      | Firefox ≥ 78                                                                            | Chrome ≥ 64                                                                          | Safari ≥ 12                                                                          |

由于 Spruce UI 基于 Vue 3 开发，所以不支持 IE 浏览器

## 使用包管理器

[Spruce UI](https://github.com/spruce-hub/spruce-ui.git) 发布在私有[包管理仓库](https://npm.sprucefe.com/)，安装时请确保已设置正确的[源地址](https://npm.sprucefe.com/)

::: tabs#pm

@tab pnpm

```bash
pnpm add @spruce-hub/cui@next -P

# or

pnpm add @spruce-hub/mui@next -P
```

@tab npm

```bash
npm install @spruce-hub/cui@next --save

# or

npm install @spruce-hub/mui@next --save
```

:::

使用

## 浏览器直接引入

Spruce UI 不建议使用该方式引入，如果你因为项目的某些特殊原因需要使用浏览器直接引入，请到[包管理仓库](https://npm.sprucefe.com/)自行下载包资源，然后部署到 CDN 或其他静态资源服务器

```html
<head>
  <link rel="stylesheet" href="${cdn_url}/@spruce-hub/cui/dist/styles/index.css" />
  <script src="${cdn_url}/@spruce-hub/cui"></script>
</head>

<!-- or -->

<head>
  <link rel="stylesheet" href="${cdn_url}/@spruce-hub/mui/dist/styles/index.css" />
  <script src="${cdn_url}/@spruce-hub/mui"></script>
</head>
```
