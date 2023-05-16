import type { App, Plugin } from 'vue'
import FilePreview from './src/file-preview.vue'

export const FilePreviewPlugin: Plugin = {
  install(app: App) {
    app.component('CFilePreview', FilePreview)
  },
}

export const CFilePreview = FilePreview
