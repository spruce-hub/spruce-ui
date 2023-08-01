import { defineClientConfig } from '@vuepress/client'

import { cui } from './configs/cui'
import { eui } from './configs/eui'
import { mui } from './configs/mui'

import ElementPlus from 'element-plus'

import '@spruce-hub/cui/dist/styles/index.css'
import '@spruce-hub/eui/dist/styles/index.css'
import '@spruce-hub/mui/dist/styles/index.css'
import '@spruce-hub/icons/dist/styles/index.css'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(cui)
    app.use(eui)
    app.use(mui)
    app.use(ElementPlus)
  },
})
