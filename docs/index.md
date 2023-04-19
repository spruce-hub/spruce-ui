---
home: true
title: 首页
heroImage: /logo.png
actions:
  - text: 预览组件
    link: /icons/index.md
    type: primary
  - text: 使用指南
    link: /guide/design.md
    type: secondary
---

::: chart

```js
module.exports = {
  type: 'bar',
  data: {
    labels: ['图标', '(S)CRM 系统', '电商系统', '管理系统'],
    datasets: [
      {
        label: '组件数',
        data: [29, 2, 2, 2, 2, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
}
```

:::
