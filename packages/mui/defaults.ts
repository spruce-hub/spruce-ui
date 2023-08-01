import type { App, Plugin } from 'vue'

import { AlertPlugin } from '@mui/components/alert'

const components = [AlertPlugin]

const mui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default mui
