<script setup lang="ts">
import { ref } from 'vue'
import { useCssVar } from '@vueuse/core'
import { useNamespace } from '@spruce-hub/ui-hooks'
import { headerMenuProps } from './header-menu'

const props = defineProps(headerMenuProps)

const { bem } = useNamespace('header-menu')

const headerRef = ref<HTMLElement | null>(null)

/** 当前导航元素宽度 */
const navItemWidth = useCssVar('--ys-nav-item-width', headerRef)
/** 当前导航元素高度 */
const navItemHeight = useCssVar('--ys-nav-item-height', headerRef)
/** 导航背景元素可见性 */
const navAfterVisibility = useCssVar('--ys-nav-after-visibility', headerRef)
/** 导航背景元素透明度 */
const navAfterOpacity = useCssVar('--ys-nav-after-opacity', headerRef)
/** 导航背景元素定位 */
const navAfterLeft = useCssVar('--ys-nav-after-left', headerRef)
/** 导航背景元素过渡属性 */
const navAfterTransition = useCssVar('--ys-nav-after-transition', headerRef)
/** 阻止鼠标事件 */
const navLockerPointerEvents = useCssVar('--ys-nav-locker-pointer-events', headerRef)

function changeActiveMenu(el: MouseEvent, index: number) {
  const target = el.target as HTMLElement
  navItemWidth.value = `${target.clientWidth}px`
  navItemHeight.value = `${target.clientHeight}px`
  navAfterVisibility.value = 'visible'
  navAfterOpacity.value = '1'
  navAfterLeft.value = `${target.offsetLeft}px`
  navAfterTransition.value = '0.5s cubic-bezier(0.75, 0, 0, 1)'
  showLocker(index)
}
/** 离开导航元素 */
function leaveNav() {
  navAfterVisibility.value = 'hidden'
  navAfterOpacity.value = '0'
  navAfterLeft.value = 'none'
  navAfterTransition.value = 'none'
  hideLocker()
}

/** 展开状态的 locker */
const activeNavLocker = ref<HTMLElement | null>(null)

/** 展开 locker */
function showLocker(index: number) {
  if (props.menuLockerRefs?.length) {
    /** 当存在 locker 元素时*/
    navLockerPointerEvents.value = 'auto'

    if (!props.menuLockerRefs[index]) {
      /** 当前索引下没有对应的 locker 元素时 */
      if (activeNavLocker.value) {
        activeNavLocker.value.classList.remove(
          ...['menu-locker-content-switch--animation', 'menu-locker-content--show'],
        )
        activeNavLocker.value = null
      }
      return
    }

    if (activeNavLocker.value) {
      /** 当已存在展开的 locker 时 */
      activeNavLocker.value.classList.remove(
        ...[
          'menu-locker-content-first--animation',
          'menu-locker-content-switch--animation',
          'menu-locker-content--show',
        ],
      )
      props.menuLockerRefs[index].classList.add('menu-locker-content-switch--animation')
    } else {
      /** 当不存在展开的 locker 时 */
      props.menuLockerRefs[index].classList.add('menu-locker-content-first--animation')
    }
    props.menuLockerRefs[index].classList.add('menu-locker-content--show')
    activeNavLocker.value = props.menuLockerRefs[index]
  }
}
/** 隐藏 locker */
function hideLocker() {
  navLockerPointerEvents.value = 'none'

  if (activeNavLocker.value) {
    activeNavLocker.value.classList.add('menu-locker-content-first--animation')
    activeNavLocker.value.classList.remove(
      ...['menu-locker-content-switch--animation', 'menu-locker-content--show'],
    )
    activeNavLocker.value = null
  }
}
</script>

<template>
  <header ref="headerRef" :class="bem()">
    <!-- 左侧容器 start -->
    <section :class="bem('left')">
      <slot name="header-left"></slot>
    </section>
    <!-- 左侧容器 end -->

    <!-- 菜单 start -->
    <nav :class="bem('nav')" @mouseleave="leaveNav()">
      <!-- 菜单列表 -->
      <ul class="menu-list">
        <li
          v-for="(item, index) in navs"
          :key="item.value"
          class="menu-item"
          @mouseenter="changeActiveMenu($event, index)"
        >
          <router-link v-if="item.linkTo" key="link" :to="item.linkTo">
            {{ item.value }}
          </router-link>
          <span v-else key="value">{{ item.value }}</span>
        </li>
      </ul>

      <!-- 菜单内容 -->
      <div class="menu-locker">
        <slot name="header-menu-locker"></slot>
      </div>
    </nav>
    <!-- 菜单 end -->

    <!-- 右侧容器 start -->
    <section :class="bem('right')">
      <slot name="header-right"></slot>
    </section>
    <!-- 右侧容器 end -->
  </header>
</template>
