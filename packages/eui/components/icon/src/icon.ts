import { colorPropType, definePropType } from '@eui/utils'

import type { Component } from 'vue'

export const iconProps = {
  color: {
    type: colorPropType(String),
    default: '',
  },
  size: {
    type: Number,
    default: null,
  },
  component: {
    type: definePropType<Component>(Object),
    default: null,
  },
}
