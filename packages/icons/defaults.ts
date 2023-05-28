import components from './components'

import type { App, Plugin } from 'vue'

const icons: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default icons
