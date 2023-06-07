import type { App, Plugin } from 'vue'

import { AlertPlugin } from '@mui/components/alert'
import { IconPlugin } from '@mui/components/icon'

const components = [AlertPlugin, IconPlugin]

const mui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default mui
