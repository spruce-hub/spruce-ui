import type { App, Plugin } from 'vue'

import { AlertPlugin } from '@cui/components/alert'
import { FilePreviewPlugin } from '@cui/components/file-preview'

const components = [AlertPlugin, FilePreviewPlugin]

const cui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default cui
