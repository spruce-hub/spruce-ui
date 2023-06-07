import type { App, Plugin } from 'vue'

import { AlertPlugin } from '@cui/components/alert'
import { FilePreviewPlugin } from '@cui/components/file-preview'
import { IconPlugin } from '@cui/components/icon'
import { OperableListPlugin } from '@cui/components/operable-list'

const components = [AlertPlugin, FilePreviewPlugin, IconPlugin, OperableListPlugin]

const cui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default cui
