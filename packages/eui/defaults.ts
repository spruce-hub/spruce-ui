import components from './component'

import type { App, Plugin } from 'vue'

const eui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default eui
