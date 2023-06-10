---
author: 文正
---

# CountDown

一个简单的倒计时

## CountDown Docs

常用于前台，例如：您已注册成功，3S 后将自动回到首页。

### 倒计时长

`duration` 属性指定倒计时长，默认值为 `3`

<Preview>
  <CountDownDuration />
</Preview>

::: details Code
@[code](../components/count-down/duration.vue)
:::

### 控制倒计时开始和暂停，默认开始

`active` 可通过该 `props` 自由控制倒计时

<Preview>
  <CountDownActive/>
</Preview>

::: details Code
@[code](../components/count-down/active.vue)
:::

### 倒计时结束时的回调事件

原生`alert`将于10秒后到达现场，你可以通过`reset`进行时间重置，或者再来一次

<Preview>
  <CountDownOnFinish/>
</Preview>

::: details Code
@[code](../components/count-down/active.vue)
:::

##  API

### Props

| Attributes | Type       | Default   | Required | Description                      |
| ---------- | ---------- | --------- | -------- | -------------------------------- |
| active     | boolean    | true      | 否       | 是否处于计时状态                 |
| duration   | number     | 3         | 否       | 倒计时持续时间，单位秒，非响应式 |
| on-finish  | () => void | undefined | 否       | 倒计时结束时的回调事件           |

### Events

| Events | Type         | Description |
| ------ | ------------ | ----------- |
| reset  | `() => void` | 重置        |

