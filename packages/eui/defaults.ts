import type { App, Plugin } from 'vue'

import { HeaderMenuPlugin } from '@eui/components/header-menu'

const components = [HeaderMenuPlugin]

const eui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default eui
