import type { App, Plugin } from 'vue'
import Icon from './src/icon.vue'
import './style/css'

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('YIcon', Icon)
  },
}

export const YIcon = Icon
