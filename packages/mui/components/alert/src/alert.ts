import { definePropType } from '@mui/utils'

export const alertProps = {
  type: {
    type: definePropType<'success' | 'info' | 'warning' | 'error'>(String),
    default: 'info',
  },
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  icon: {
    type: definePropType<'start' | 'end' | 'center'>(String),
    default: 'center',
  },
  center: Boolean,
  loading: Boolean,
  more: {
    type: definePropType<{ text: string; align: 'start' | 'end' | 'center' }>(Object),
    default: { text: '', align: '' },
  },
  closable: {
    type: definePropType<'start' | 'end' | 'center'>(String),
    default: '',
  },
}

export const alertEmits = {
  close: (e: MouseEvent) => e instanceof MouseEvent,
  handleMore: (close: () => void) => close,
}
