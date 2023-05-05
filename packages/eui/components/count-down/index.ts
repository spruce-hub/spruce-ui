import type { App, Plugin } from 'vue'
import CountDown from './src/count-down.vue'

export const CountDownPlugin: Plugin = {
  install(app: App) {
    app.component('ECountDown', CountDown)
  },
}

export const ECountDown = CountDown
