import { AlertPlugin, IconPlugin, FilePreviewPlugin } from '@spruce-hub/cui'

import type { App, Plugin } from 'vue'

const components = [AlertPlugin, IconPlugin, FilePreviewPlugin]

export const cui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}
