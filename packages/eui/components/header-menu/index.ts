import type { App, Plugin } from 'vue'
import HeaderMenu from './src/header-menu.vue'

export const HeaderMenuPlugin: Plugin = {
  install(app: App) {
    app.component('EHeaderMenu', HeaderMenu)
  },
}

export const EHeaderMenu = HeaderMenu
