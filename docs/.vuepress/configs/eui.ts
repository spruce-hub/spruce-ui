import { AlertPlugin, IconPlugin, CountDownPlugin } from '@spruce-hub/eui'

import type { App, Plugin } from 'vue'

const components = [AlertPlugin, IconPlugin, CountDownPlugin]

export const eui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}
