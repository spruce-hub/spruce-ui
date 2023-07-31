import components from './components'
import { IconPlugin } from './icon'

import type { App, Plugin } from 'vue'

const icons: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
    app.use(IconPlugin)
  },
}

export default icons
