<script setup lang="ts">
import IconList from '../icon-list.vue'
import {
  OperateCopy,
  OperateDelete,
  OperateFullscreenExit,
  OperateFullscreen,
  OperateGood,
  OperateMove,
  OperatePenEditDash,
  OperatePenEdit,
  OperatePlusCircle,
  OperatePrint,
  OperateRadioDot,
  OperateRefresh,
  OperateSave,
  OperateSet,
  OperateSwitch,
  OperateView,
  OperateZoomIn,
  OperateZoomOut,
} from '@spruce-hub/icons'

const groupIcons = [
  OperateCopy,
  OperateDelete,
  OperateFullscreenExit,
  OperateFullscreen,
  OperateGood,
  OperateMove,
  OperatePenEditDash,
  OperatePenEdit,
  OperatePlusCircle,
  OperatePrint,
  OperateRadioDot,
  OperateRefresh,
  OperateSave,
  OperateSet,
  OperateSwitch,
  OperateView,
  OperateZoomIn,
  OperateZoomOut,
]
</script>

<template>
  <IconList :components="groupIcons" />
</template>

<style lang="scss" scoped></style>
