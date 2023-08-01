import { AlertPlugin, FilePreviewPlugin } from '@spruce-hub/cui'

import type { App, Plugin } from 'vue'

const components = [AlertPlugin, FilePreviewPlugin]

export const cui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}
