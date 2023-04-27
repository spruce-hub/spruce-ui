# Composables

- `useNamespace`
  - 标准化 class 命名

```ts
const { bem, is } = useNamespace('example')

bem() // 'ys-example'
bem('alert') // 'ys-example__alert'
bem('alert', 'primary') // 'ys-example__alert--primary'
bem('alert__button', 'primary') // 'ys-example__alert__button--primary'

is({ primary: true }) // ['ys-is--primary']
is('warning') // ['ys-is--warning']
is({ primary: true }, 'warning') // ['ys-is--primary', 'ys-is--warning']
```

- `useDefinePropType`
  - 为 Props 提供完善的类型声明

```ts
export const props = {
  type: {
    type: definePropType<'success' | 'info' | 'warning' | 'error'>(String),
    default: 'info',
  },
}
```
