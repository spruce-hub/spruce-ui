# Composables

### class 助手 `useNamespace`

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
