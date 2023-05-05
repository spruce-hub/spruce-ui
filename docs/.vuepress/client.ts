import { defineClientConfig } from '@vuepress/client'
import cui from '@spruce-hub/cui'
import eui from '@spruce-hub/eui'
import mui from '@spruce-hub/mui'
import ElementPlus from 'element-plus'
import '@spruce-hub/cui/dist/styles/index.css'
import '@spruce-hub/eui/dist/styles/index.css'
import '@spruce-hub/mui/dist/styles/index.css'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(cui)
    app.use(eui)
    app.use(mui)
    app.use(ElementPlus)
  },
})
