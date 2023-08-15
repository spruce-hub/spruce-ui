import { defineClientConfig } from '@vuepress/client'

import { eui } from './configs/eui'

import ElementPlus from 'element-plus'

import '@spruce-hub/icons/dist/styles/index.css'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(eui)
    app.use(ElementPlus)
  },
})
