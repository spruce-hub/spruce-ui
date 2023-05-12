import { CSSProperties, PropType } from 'vue'
export const filePreviewProps = {
  visible: {
    type: Boolean,
    default: false,
  },
  teleportDisabled: {
    type: Boolean,
    default: false,
  },
  attachTo: {
    type: String,
    default: 'body',
  },
  fileUrl: {
    type: String,
    default: '',
  },
  errorBgColor: {
    type: String,
    default: 'rgba(0, 0, 0, 0.6)',
  },
  errorIconColor: {
    type: String,
    default: '#e88420',
  },
  imageWrapperStyle: {
    type: [Object, String] as PropType<CSSProperties | string>,
    default: {},
  },
  imageStyle: {
    type: [Object, String] as PropType<CSSProperties | string>,
    default: {},
  },
  officeWrapperStyle: {
    type: [Object, String] as PropType<CSSProperties | string>,
    default: {},
  },
  officeStyle: {
    type: [Object, String] as PropType<CSSProperties | string>,
    default: {},
  },
}

export const filePreviewEmits = {
  beforeClose: (e: MouseEvent) => e instanceof MouseEvent,
  'update:visible': (val: boolean, e: MouseEvent) =>
    typeof val === 'boolean' && e instanceof MouseEvent,
}

export type ViewType = 'image' | 'office' | 'other' | 'error'

type ImageType = 'JPG' | 'JPEG' | 'PNG' | 'JPGE'

type OfficeType = 'DOC' | 'DOCX' | 'XLS' | 'XLSX' | 'PPT' | 'PPTX'

type OtherType = 'PDF'

export type FileType = ImageType | OfficeType | OtherType
