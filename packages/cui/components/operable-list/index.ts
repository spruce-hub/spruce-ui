import type { App, Plugin } from 'vue'
import OperableList from './src/operable-list.vue'

export const OperableListPlugin: Plugin = {
  install(app: App) {
    app.component('COperableList', OperableList)
  },
}

export const COperableList = OperableList
