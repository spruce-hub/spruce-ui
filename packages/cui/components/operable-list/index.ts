import type { App, Plugin } from 'vue'
import OperableList from './src/operable-list.vue'
// import DropdownMore from './src/dropdown-more.vue'
// import IconBtn from './src/operable-list.vue'
// import OperableListItem from './src/operable-list-item.vue'

export const OperableListPlugin: Plugin = {
  install(app: App) {
    app.component('COperableList', OperableList)
    // app.component('CDropdownMore', DropdownMore)
  },
}

export const COperableList = OperableList
// export const CDropdownMore = DropdownMore
// export const CIconBtn = IconBtn
// export const COperableListItem = OperableListItem
