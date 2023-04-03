import { defineClientConfig } from '@vuepress/client'
import cui from '@spruce-hub/cui'

export default defineClientConfig({
  enhance({ app }) {
    app.use(cui)
  },
})
