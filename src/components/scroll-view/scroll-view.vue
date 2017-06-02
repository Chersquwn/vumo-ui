<template>
  <div 
    class="vumo-scroll-view"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd">
    <div 
      class="vumo-scroll-view-content"
      :style="{transform: `translate3d(0, ${top}px, 0)`}">
      <div 
        class="vumo-scroll-view-pull-to-refresh"
        :class="refreshStateClass">
        <slot name="refresh">
          <span class="pull-down-text">↓ 下拉刷新</span>
          <span class="pull-up-text">↑ 释放立即刷新</span>
          <span class="refreshing-text">正在刷新</span>
        </slot>
      </div>
      <slot></slot>
      <div class="vumo-scroll-view-pull-to-load">
        <slot name="load">
          <span class="loading-text">加载中...</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mo-scroll-view',
  data() {
    return {
      top: 0,
      startY: 0,
      prevY: 0,
      refreshStateClass: ''
    }
  },
  methods: {
    onTouchStart(e) {
      this.prevY = this.startY = e.touches[0].pageY
    },
    onTouchMove(e) {
      this.moveY = e.touches[0].pageY

      const dy = this.moveY - this.prevY

      this.top += dy * 0.3

      this.prevY = this.moveY
    },
    onTouchEnd(e) {
      this.top = 0
    }
  }
}
</script>

<style lang="scss">
@import "./scroll-view.scss";
</style>
