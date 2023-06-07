<script setup lang="ts">
import {
  OperableListProps,
  OperableListEmits,
  IOperableListItem,
  TOperableList,
  createOperableHandle,
  Status,
  createEllipsisHandle,
} from './operable-list'
import { useNamespace } from '@spruce-hub/ui-hooks'
import OperableListItem from './operable-list-item.vue'
import Sortable, { SortableEvent } from 'sortablejs'
import { NInput, useMessage } from 'naive-ui'
import { ref, nextTick, reactive, onMounted } from 'vue'

const props = defineProps(OperableListProps)
const emit = defineEmits(OperableListEmits)

const { bem, is } = useNamespace('operable-list')

const HandleComps = createOperableHandle(props.handle)

const EllipsisHandleComps = createEllipsisHandle(props.ellipsisHandle)

const hasStatus = props.handle.includes('status') || props.ellipsisHandle.includes('status')
function isItemDisabled(status?: Status) {
  return hasStatus && !status
}

function listItemClass(item: IOperableListItem) {
  return is({
    active: item.id === props.active,
  })
}
function listItemStyle(index: number) {
  return {
    order: index,
    display: index === inputInst.index ? 'none' : 'flex',
  }
}

function onDel(item: IOperableListItem) {
  emit('del', item)
}

function onChangeStatus(item: IOperableListItem) {
  emit('changeStatus', item, item.status ? Status.disable : Status.enable)
}

function onNameClick(item: IOperableListItem) {
  emit('update:active', item.id, item)
}

// 创建拖拽
const OperableListRef = ref({} as HTMLDivElement)
onMounted(() => {
  Sortable.create(OperableListRef.value, {
    sort: true,
    animation: 300,
    handle: '#MOVE',
    onEnd({ newIndex, oldIndex }: SortableEvent) {
      const temp = props.list
      const item = temp.splice(oldIndex!, 1)[0]
      temp.splice(newIndex!, 0, item)
      onDrag(temp)
    },
  })
})
function onDrag(list: TOperableList) {
  emit('update:list', list)
  emit(
    'sort',
    list.map((e) => e.id),
    list
  )
}

// 输入框的相关数据和方法
const inputInst = reactive<{
  status: 'free' | 'editing' | 'adding'
  value: string
  index: number
}>({
  status: 'free',
  value: '',
  index: -1,
})
const InputRef = ref({} as { focus: () => void })
function onEdit(item: IOperableListItem, index: number) {
  inputInst.value = item.name
  inputInst.status = 'editing'
  inputInst.index = index
  nextTick(() => {
    InputRef.value.focus()
  })
}
function addNewItem() {
  inputInst.value = ''
  inputInst.status = 'adding'
  inputInst.index = props.list.length
  nextTick(() => {
    InputRef.value.focus()
  })
}

// 输入框输入之后的提交行为
const msgInst = useMessage()
function onInputCommit() {
  if (inputInst.status === 'editing') {
    if (inputInst.value !== props.list[inputInst.index].name) {
      if (inputInst.value === '') {
        msgInst.info('请输入内容')
        InputRef.value.focus()
        return
      }
      let temp = props.list
      temp[inputInst.index].name = inputInst.value
      emit('update:list', temp)
      emit('edit', temp[inputInst.index])
    }
    inputInst.status = 'free'
    inputInst.index = -1
  } else {
    if (inputInst.value === '') {
      inputInst.status = 'free'
      inputInst.index = -1
    } else {
      emit('add', inputInst.value)
    }
  }
}

defineExpose({
  addNewItem,
})
</script>

<template>
  <div
    ref="OperableListRef"
    :class="bem()"
    :style="{ display: inputInst.status === 'editing' ? 'flex' : 'block' }"
  >
    <OperableListItem
      v-for="(item, index) in list"
      :key="item.id"
      :value="item.name"
      :class="listItemClass(item)"
      :disabled="isItemDisabled(item.status)"
      :style="listItemStyle(index)"
      @name-click="onNameClick(item)"
    >
      <template #handle>
        <HandleComps
          :status="item.status ?? Status.enable"
          @drag="onDrag"
          @edit="onEdit(item, index)"
          @del="onDel(item)"
          @change-status="onChangeStatus(item)"
        />
        <EllipsisHandleComps
          v-if="ellipsisHandle.length"
          :status="item.status ?? Status.enable"
          @edit="onEdit(item, index)"
          @del="onDel(item)"
          @change-status="onChangeStatus(item)"
        />
      </template>
    </OperableListItem>

    <n-input
      v-if="inputInst.status !== 'free'"
      ref="InputRef"
      v-model:value="inputInst.value"
      :class="bem('input')"
      placeholder="请输入"
      :style="{ order: inputInst.index, '--n-height': '30px' }"
      @blur="onInputCommit"
      @keyup.enter="onInputCommit"
    />
  </div>
</template>
