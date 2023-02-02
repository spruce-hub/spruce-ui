import type { App, Plugin } from 'vue'
import Icon from './src/icon.vue'

export const IconPlugin: Plugin = {
  install(app: App) {
    app.component('MIcon', Icon)
  },
}

export const MIcon = Icon
