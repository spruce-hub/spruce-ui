<script setup lang="ts">
import { CloseBold, Warning } from '@spruce-hub/icons'
import { CIcon } from '@cui/components/icon'
import { className } from '@cui/utils'
import { computed, onMounted, readonly, watch } from 'vue'
import { reactive, ref } from 'vue'
import { LazyTeleport } from 'vueuc'
import { filePreviewProps, filePreviewEmits, FileType, ViewType } from './file-preview'

const props = defineProps(filePreviewProps)
const emit = defineEmits(filePreviewEmits)

const { b, e, m, bem } = className('file-preview')

interface PreviewFile {
  url: string
  filetype: FileType
  viewType: ViewType
}
const errorShow = ref<boolean>(false)
const file = reactive<PreviewFile>({
  url: '',
  filetype: 'PNG',
  viewType: 'error',
})

const fileToView: Record<FileType, ViewType> = {
  PDF: 'other',
  DOC: 'office',
  DOCX: 'office',
  XLS: 'office',
  XLSX: 'office',
  PPT: 'office',
  PPTX: 'office',
  JPG: 'image',
  JPGE: 'image',
  JPEG: 'image',
  PNG: 'image',
}

function getFileInformation(fileUrl: string): void {
  fileUrl = fileUrl.trim()
  let len: number = fileUrl.split('.').length - 1
  let str: string = fileUrl.split('.')[len].toUpperCase()
  if (!fileToView[str as FileType]) {
    errorShow.value = true
    file.viewType = 'error'
  } else {
    file.filetype = str as FileType
    file.viewType = fileToView[str as FileType]
    if (file.filetype === 'PDF') {
      fetch(fileUrl)
        .then((res) => res.blob())
        .then((blob) => {
          let render = new FileReader()
          render.onload = () => {
            file.url = render.result as string
          }
          render.readAsDataURL(blob)
        })
    } else {
      file.url = fileUrl
    }
  }
}

function close(e: MouseEvent) {
  emit('beforeClose', e)
  emit('update:visible', false, e)
  document.body.style.overflow = 'auto'
}

const teleportStyle = computed(() => {
  return {
    ['--c-file-preview-error-bgColor']: props.errorBgColor,
    ['--c-file-preview-error-iconColor']: props.errorIconColor,
  }
})

watch(
  () => props.visible,
  (val) => {
    if (val) {
      document.body.style.overflow = 'hidden'
    }
  },
  {
    immediate: true,
  }
)

watch(
  () => props.fileUrl,
  () => {
    file.url = ''
    getFileInformation(props.fileUrl)
  }
)

onMounted(() => {
  getFileInformation(props.fileUrl)
})

defineExpose({
  file: readonly(file),
  teleportStyle: readonly(teleportStyle),
})
</script>

<template>
  <div :class="b()" role="preview">
    <slot name="default"></slot>
    <LazyTeleport :show="visible" :disabled="teleportDisabled" :to="attachTo">
      <div
        v-if="visible"
        :class="[e('teleport__container'), teleportDisabled ? m('teleport-disable') : '']"
        :style="teleportStyle"
      >
        <div :class="e('teleport__overlay')"></div>
        <div :class="e('teleport__close')" @click="close">
          <slot name="close">
            <div :class="bem('teleport__close', 'icon')">
              <CIcon>
                <CloseBold />
              </CIcon>
            </div>
          </slot>
        </div>
        <div v-if="$slots.toolbar" :class="e('teleport__toolbar')">
          <slot name="toolbar"></slot>
        </div>
        <div
          v-if="file.viewType !== 'error'"
          :class="[e('teleport__wrapper'), bem('teleport__wrapper', file.viewType)]"
          :style="
            ['office', 'other'].includes(file.viewType) ? officeWrapperStyle : imageWrapperStyle
          "
        >
          <template v-if="file.viewType === 'image' && file.url">
            <img
              :class="[
                e('teleport__content'),
                bem('teleport__content', 'image'),
                bem('teleport__content', file.filetype),
              ]"
              :style="imageStyle"
              :src="file.url"
            />
          </template>
          <template v-else-if="file.viewType === 'office' && file.url">
            <div
              :class="[e('teleport__content'), bem('teleport__content', 'office')]"
              :style="officeStyle"
            >
              <iframe
                :src="`https://view.officeapps.live.com/op/view.aspx?src=${file.url}`"
                width="100%"
                height="100%"
                frameborder="0"
                scrolling="yes"
              ></iframe>
            </div>
          </template>
          <template v-else-if="file.viewType === 'other' && file.url">
            <div
              :class="[e('teleport__content'), bem('teleport__content', 'office')]"
              :style="officeStyle"
            >
              <object width="100%" height="100%" frameBorder="0" :data="file.url"></object>
            </div>
          </template>
        </div>
        <div v-else :class="e('teleport__error')">
          <slot name="error">
            <div :class="e('teleport__error_container')">
              <CIcon :class="bem('teleport__error', 'icon')">
                <Warning />
              </CIcon>
              <span :class="bem('teleport__error', 'label')">该格式无法预览</span>
            </div>
          </slot>
        </div>
      </div>
    </LazyTeleport>
  </div>
</template>
