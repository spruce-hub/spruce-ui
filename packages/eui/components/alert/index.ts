import type { App, Plugin } from 'vue'
import Alert from './src/alert.vue'

export const AlertPlugin: Plugin = {
  install(app: App) {
    app.component('EAlert', Alert)
  },
}

export const EAlert = Alert
