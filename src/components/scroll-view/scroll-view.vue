<template>
  <div 
    class="vumo-scroll-view"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @scroll="onScroll"
    ref="view">
    <div 
      class="vumo-scroll-view-content"
      :style="{transform: `translate3d(0, ${top}px, 0)`, transition: `all ${duration}s ease`}"
      :class="refreshStateClass"
      ref="content">
      <div 
        class="vumo-scroll-view-pull-to-refresh"
        ref="refresh">
        <slot name="refresh">
          <span class="pull-down-text" v-if="state === 0">↓ 下拉刷新</span>
          <span class="release-text" v-if="state === 1">↑ 释放立即刷新</span>
          <span class="refreshing-text" v-if="state === 2">正在刷新</span>
          <span class="refresh-done-text" v-if="state === 3">刷新成功</span>
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
      state: 0,
      isBusy: false,
      loading: false,
      duration: .3
    }
  },
  mounted() {
    this.height = this.$refs.refresh.clientHeight
    this.viewHeight = this.$refs.view.clientHeight
    this.$refs.content.addEventListener('transitionend', () => {
      if (this.state === 3) {
        this.state = 0
        this.isBusy = false
      }
    })
  },
  computed: {
    refreshStateClass() {
      const classes = ['vumo-scroll-view-content']

      switch (this.state) {
        case 0:
          classes.push('pull-down')
          break;
        case 1:
          classes.push('release')
          break;
        case 2:
          classes.push('refreshing')
          break;
        case 3:
          classes.push('refresh-done')
          break;
      }

      return classes
    }
  },
  methods: {
    onTouchStart(e) {
      this.prevY = this.startY = e.touches[0].pageY
    },
    onTouchMove(e) {
      if (this.isBusy) return;

      this.moveY = e.touches[0].pageY

      const dy = this.moveY - this.prevY

      if (this.top >= 0 && this.moveY - this.startY - this.$el.scrollTop > 0) {
        e.preventDefault()

        this.duration = 0
        this.top += dy * 0.25

        if (this.top > this.height) {
          this.state = 1
        } else {
          this.state = 0
        }

        this.prevY = this.moveY
      }
    },
    onTouchEnd(e) {
      if (this.isBusy) return;
      
      if (this.top >= this.height) {
        this.state = 2
        this.top = this.height
        this.$emit('refresh', this.refreshDone)
      } else {
        this.top = 0
      }
      this.duration = .3
      this.updating = true
    },
    refreshDone() {
      this.state = 3
      setTimeout(() => {
        this.top = 0
      }, 300)
    },
    onScroll() {
      if (this.loading) return
      if (this.$refs.content.clientHeight * .9 < this.$el.scrollTop + this.viewHeight) {
        this.loading = true
        this.$emit('scrollLoad', this.loadDone)
      }
    },
    loadDone() {
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
@import "./scroll-view.scss";
</style>
