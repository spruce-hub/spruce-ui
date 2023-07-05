# 更换主题

## 通过 CSS 变量设置

```css
:root {
  --ys-primary: red;
}
```

对于特定组件，可以使用内联样式

```vue
<CAlert type="success" description="success alert" style="--ys-primary: red" />
```

以下是默认主题的 css 变量

```scss
:root {
	  // 品牌色
  --ys-primary: #4177ff;
  --ys-primary-light: #f0f4ff;
  --ys-primary-dark: #1040ab;

  // 辅助色
  --ys-secondary: #1fbf86;
  --ys-secondary-light: #f3fffc;
  --ys-secondary-dark: #05a86b;

  // 强调色
  --ys-strong: #fb5800;
  --ys-strong-light: #fff8f1;
  --ys-strong-dark: #ee5501;

  // 交互色
  --ys-success: #41cc8b;
  --ys-warning: #f4934b;
  --ys-error: #d94b3e;
  --ys-info: #4f94e6;
  --ys-success-bg: #edfdf8;
  --ys-warning-bg: #fff8eb;
  --ys-error-bg: #feefef;
  --ys-info-bg: #f0f5ff;

  // 中性色
  --ys-white: #ffffff;
  --ys-black: #000000;
  --ys-gray: #333333;
  --ys-gray-100: #666666;
  --ys-gray-200: #999999;
  --ys-gray-300: #dddddd;
  --ys-gray-400: #eeeeee;
  --ys-gray-500: #f5f5f5;
  --ys-gray-600: #fafafa;
}
```