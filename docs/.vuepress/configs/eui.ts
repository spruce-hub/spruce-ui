import { AlertPlugin, CountDownPlugin, HeaderMenuPlugin } from '@spruce-hub/eui'

import type { App, Plugin } from 'vue'

const components = [AlertPlugin, CountDownPlugin, HeaderMenuPlugin]

export const eui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}
