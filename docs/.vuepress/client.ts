import { defineClientConfig } from '@vuepress/client'
import cui from '@spruce-hub/cui'
import mui from '@spruce-hub/mui'
import '@spruce-hub/cui/dist/styles/index.css'
import '@spruce-hub/mui/dist/styles/index.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(cui)
    app.use(mui)
  },
})
