<script setup lang="ts">
import { ElMessage } from 'element-plus'

const copy = async (param: string) => {
  try {
    await navigator.clipboard.writeText(param)

    ElMessage({
      message: `已复制 ${param}`,
      type: 'success',
    })
  } catch (err) {
    ElMessage.error('复制失败')
  }
}

interface Block {
  title: string
  styles: Array<{
    backdrop: string
    border: string
    shadow: string
    param: string
    value: string
    textColor: string
  }>
}
const colorBlock = [
  {
    title: '品牌色',
    styles: [
      {
        backdrop: '--ys-primary-light',
        border: '',
        shadow: '',
        param: '--ys-primary-light',
        value: '#f0f4ff',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-primary',
        border: '',
        shadow: '',
        param: '--ys-primary',
        value: '#4177ff',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-primary-dark',
        border: '',
        shadow: '',
        param: '--ys-primary-dark',
        value: '#1040ab',
        textColor: '--ys-white',
      },
    ],
  },
  {
    title: '辅助色',
    styles: [
      {
        backdrop: '--ys-secondary-light',
        border: '',
        shadow: '',
        param: '--ys-secondary-light',
        value: '#f3fffc',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-secondary',
        border: '',
        shadow: '',
        param: '--ys-secondary',
        value: '#1fbf86',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-secondary-dark',
        border: '',
        shadow: '',
        param: '--ys-secondary-dark',
        value: '#05a86b',
        textColor: '--ys-white',
      },
    ],
  },
  {
    title: '强调色',
    styles: [
      {
        backdrop: '--ys-strong-light',
        border: '',
        shadow: '',
        param: '--ys-strong-light',
        value: '#fff8f1',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-strong',
        border: '',
        shadow: '',
        param: '--ys-strong',
        value: '#fb5800',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-strong-dark',
        border: '',
        shadow: '',
        param: '--ys-strong-dark',
        value: '#ee5501',
        textColor: '--ys-white',
      },
    ],
  },
  {
    title: '交互色',
    styles: [
      {
        backdrop: '--ys-success',
        border: '',
        shadow: '',
        param: '--ys-success',
        value: '#41cc8b',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-warning',
        border: '',
        shadow: '',
        param: '--ys-warning',
        value: '#f4934b',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-error',
        border: '',
        shadow: '',
        param: '--ys-error',
        value: '#d94b3e',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-info',
        border: '',
        shadow: '',
        param: '--ys-info',
        value: '#4f94e6',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-success-bg',
        border: '',
        shadow: '',
        param: '--ys-success-bg',
        value: '#41cc8b',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-warning-bg',
        border: '',
        shadow: '',
        param: '--ys-warning-bg',
        value: '#f4934b',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-error-bg',
        border: '',
        shadow: '',
        param: '--ys-error-bg',
        value: '#d94b3e',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-info-bg',
        border: '',
        shadow: '',
        param: '--ys-info-bg',
        value: '#4f94e6',
        textColor: '--ys-black',
      },
    ],
  },
  {
    title: '中性色',
    styles: [
      {
        backdrop: '--ys-gray',
        border: '',
        shadow: '',
        param: '--ys-gray',
        value: '#333333',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-gray-100',
        border: '',
        shadow: '',
        param: '--ys-gray-100',
        value: '#666666',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-gray-200',
        border: '',
        shadow: '',
        param: '--ys-gray-200',
        value: '#999999',
        textColor: '--ys-white',
      },
      {
        backdrop: '--ys-gray-300',
        border: '',
        shadow: '',
        param: '--ys-gray-300',
        value: '#dddddd',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-gray-400',
        border: '',
        shadow: '',
        param: '--ys-gray-400',
        value: '#eeeeee',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-gray-500',
        border: '',
        shadow: '',
        param: '--ys-gray-500',
        value: '#f5f5f5',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-gray-600',
        border: '',
        shadow: '',
        param: '--ys-gray-600',
        value: '#fafafa',
        textColor: '--ys-black',
      },
    ],
  },
]
const borderBlock = [
  {
    title: '基础边框',
    styles: [
      {
        backdrop: '--ys-white',
        border: '--ys-border-light',
        shadow: '',
        param: '--ys-border-light',
        value: '1px solid var(--ys-border-color-light)',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-white',
        border: '--ys-border',
        shadow: '',
        param: '--ys-border',
        value: '1px solid var(--ys-border-color)',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-white',
        border: '--ys-border-dark',
        shadow: '',
        param: '--ys-border-dark',
        value: '1px solid var(--ys-border-color-dark)',
        textColor: '--ys-black',
      },
    ],
  },
]
const shadowBlock = [
  {
    title: '基础阴影',
    styles: [
      {
        backdrop: '--ys-white',
        border: '',
        shadow: '--ys-box-shadow-light',
        param: '--ys-box-shadow-light',
        value: '0 0 4px 2px var(--ys-shadow-color-light)',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-white',
        border: '',
        shadow: '--ys-box-shadow',
        param: '--ys-box-shadow',
        value: '0 0 4px 2px var(--ys-shadow-color)',
        textColor: '--ys-black',
      },
      {
        backdrop: '--ys-white',
        border: '',
        shadow: '--ys-box-shadow-dark',
        param: '--ys-box-shadow-dark',
        value: '0 0 4px 2px var(--ys-shadow-color-dark)',
        textColor: '--ys-black',
      },
    ],
  },
]
const chalk: Record<string, Block[]> = {
  color: colorBlock,
  border: borderBlock,
  shadow: shadowBlock,
}
defineProps({
  block: {
    type: String,
    default: 'color',
  },
})
</script>

<template>
  <div class="ys-chalk">
    <div v-for="list in chalk[block]" :key="list.title" class="ys-chalk__list">
      <h3 class="ys-chalk__list-title">{{ list.title }}</h3>
      <div class="ys-chalk__list-content">
        <div
          v-for="style in list.styles"
          :key="style.value"
          :style="{
            '--backdrop-color': `var(${style.backdrop})`,
            '--border-style': `var(${style.border})`,
            '--shadow-style': `var(${style.shadow})`,
            '--text-color': `var(${style.textColor})`,
          }"
          class="ys-chalk__style"
        >
          <p class="ys-chalk__style-color" @click="copy(`var(${style.param})`)">
            {{ style.param }}
          </p>
          <p class="ys-chalk__style-value" @click="copy(style.value)">
            {{ style.value.toUpperCase() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ys-chalk {
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
}
.ys-chalk__list {
  margin-bottom: 30px;
}
.ys-chalk__list-title {
  border-bottom: var(--ys-border);
}
.ys-chalk__list-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
}
.ys-chalk__style {
  --backdrop-color: #eee;
  --border-style: '';
  --shadow-style: '';
  --text-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
  height: 130px;
  padding: 10px;
  background-color: var(--backdrop-color);
  border-radius: 10px;
  border: var(--border-style);
  box-shadow: var(--shadow-style);
  margin-top: 10px;
  transition: all 0.6s;

  &:hover {
    box-shadow: 0 0 4px 1px var(--backdrop-color);
  }
}
.ys-chalk__style-color,
.ys-chalk__style-value {
  display: flex;
  align-items: center;
  flex: 1;
  box-sizing: border-box;
  width: 100%;
  color: var(--text-color) !important;
  padding: 0 10px;
  border-radius: 4px;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  cursor: pointer;
  transition: background-color 0.4s;

  &:hover {
    color: var(--ys-white) !important;
    background-color: rgba(#000, 0.4);
  }
}
</style>
