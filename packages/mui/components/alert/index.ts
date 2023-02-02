import type { App, Plugin } from 'vue'
import Alert from './src/alert.vue'

export const AlertPlugin: Plugin = {
  install(app: App) {
    app.component('MAlert', Alert)
  },
}

export const MAlert = Alert
