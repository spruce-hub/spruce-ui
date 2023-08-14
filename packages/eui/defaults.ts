import type { App, Plugin } from 'vue'

import { AlertPlugin } from '@eui/components/alert'
import { CountDownPlugin } from '@eui/components/count-down'
import { HeaderMenuPlugin } from '@eui/components/header-menu'

const components = [AlertPlugin, CountDownPlugin, HeaderMenuPlugin]

const eui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default eui
