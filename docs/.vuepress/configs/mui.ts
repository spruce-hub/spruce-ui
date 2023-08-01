import { AlertPlugin } from '@spruce-hub/mui'

import type { App, Plugin } from 'vue'

const components = [AlertPlugin]

export const mui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}
