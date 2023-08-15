import type { App, Plugin } from 'vue'
import HeaderMenu from './src/header-menu.vue'
import '@eui/components/header-menu/style/css'

export const HeaderMenuPlugin: Plugin = {
  install(app: App) {
    app.component('EHeaderMenu', HeaderMenu)
  },
}

export const EHeaderMenu = HeaderMenu
