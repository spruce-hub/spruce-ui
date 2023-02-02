import { defineClientConfig } from '@vuepress/client'
import cui from '@spruce/cui'

export default defineClientConfig({
  enhance({ app }) {
    app.use(cui)
  },
})
