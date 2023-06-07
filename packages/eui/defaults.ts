import type { App, Plugin } from 'vue'

import { AlertPlugin } from '@eui/components/alert'
import { IconPlugin } from '@eui/components/icon'
import { CountDownPlugin } from '@eui/components/count-down'

const components = [AlertPlugin, IconPlugin, CountDownPlugin]

const eui: Plugin = {
  install(app: App) {
    components.forEach((c) => app.use(c))
  },
}

export default eui
