import { PropType, h } from 'vue'
import IconBtn from './icon-btn.vue'
import { Move, PenEdit, Delete, SuccessCircle, Disable } from '@spruce-hub/icons'
import { CIcon } from '@cui/components'
import DropdownMore from './dropdown-more.vue'
export { default as OperableListItem } from './operable-list-item.vue'
// import { CIconBtn as IconBtn, CDropdownMore as DropdownMore, CIcon } from '@cui/components'

export enum Status {
  enable = 1,
  disable = 0,
}
export interface IOperableListItem {
  id: number
  name: string
  status?: Status
}
export type TOperableList = IOperableListItem[]

export type HandleUnion = 'edit' | 'del' | 'sort' | 'status'
export type TOperableHandle = Array<HandleUnion>

export type EllipsisHandleUnion = 'edit' | 'del' | 'status'

export const OperableListProps = {
  active: {
    type: Number,
    required: true,
  },
  list: {
    type: Array as PropType<TOperableList>,
    required: true,
    default() {
      return []
    },
  },
  handle: {
    type: Array as PropType<TOperableHandle>,
    required: false,
    default() {
      return ['edit', 'del', 'sort']
    },
  },
  ellipsisHandle: {
    type: Array as PropType<Array<EllipsisHandleUnion>>,
    required: false,
    default() {
      return []
    },
  },
}

export const OperableListEmits = {
  'update:active': (id: number, item: IOperableListItem) => id && item,
  'update:list': (val: TOperableList) => val,
  del: (val: IOperableListItem) => val,
  sort: (ids: number[], val: TOperableList) => ids && val,
  edit: (val: IOperableListItem) => val,
  changeStatus: (val: IOperableListItem, status: Status) => val && status,
  add: (val: string) => val,
}

const OperableHandleRender = {
  edit(props: { onEdit: () => void }) {
    return h(
      IconBtn,
      {
        onClick() {
          props.onEdit()
        },
        name: '编辑',
      },
      () => h(PenEdit)
    )
  },
  del(props: { onDel: () => void }) {
    return h(
      IconBtn,
      {
        onClick() {
          props.onDel()
        },
        name: '删除',
      },
      () => h(Delete)
    )
  },
  sort() {
    return h(
      CIcon,
      {
        id: 'MOVE',
        size: 12,
        color: '#666666',
      },
      () => h(Move)
    )
  },
  status(props: { onChangeStatus: () => void; status: Status }) {
    const disable = h(
      IconBtn,
      {
        onClick() {
          props.onChangeStatus()
        },
        name: '禁用',
      },
      () => h(Disable)
    )
    const enable = h(
      IconBtn,
      {
        onClick() {
          props.onChangeStatus()
        },
        name: '启用',
      },
      () => h(SuccessCircle)
    )
    return props.status ? disable : enable
  },
}
export function createOperableHandle(comps: TOperableHandle) {
  return function (props: {
    onEdit: () => void
    onDel: () => void
    status: Status
    onChangeStatus: () => void
  }) {
    return comps.map((item) => {
      return OperableHandleRender[item](props)
    })
  }
}

const EllipsisHandleOptions = (status: Status) => ({
  edit: { label: '编辑', key: 'edit' },
  del: { label: '删除', key: 'del' },
  status: { label: status ? '禁用' : '启用', key: 'status' },
})

export function createEllipsisHandle(comps: Array<EllipsisHandleUnion>) {
  return function (props: {
    onEdit: () => void
    onDel: () => void
    status: Status
    onChangeStatus: () => void
  }) {
    return h(DropdownMore, {
      onSelect(key: HandleUnion) {
        if (key === 'edit') {
          props.onEdit()
        } else if (key === 'del') {
          props.onDel()
        } else if (key === 'status') {
          props.onChangeStatus()
        }
      },
      options: comps.map((e) => EllipsisHandleOptions(props.status)[e]),
    })
  }
}
