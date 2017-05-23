<template>
  <div class="vumo-viewpager"
    :class="tabClass">
    <div class="vumo-viewpager-tabbar">
      <slot name="tabbar"></slot>
    </div>
    <div class="vumo-viewpager-container"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd">
      <div class="vumo-viewpager-wrap" ref="wrap">
        <slot name="container"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mo-view-pager',
  props: {
    tabPosition: {
      type: String,
      default: 'top'
    },
  },
  computed: {
    tabClass() {
      switch (this.tabPosition) {
        case 'bottom':
          return 'is-bottom'
        default:
          return 'is-top'
      }
    }
  },
  data() {
    return {
      index: 0,
      prevIndex: 0,
      currentPos: 0,
      queue: [],
      speed: 400,
      ease(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2))
      }
    }
  },
  mounted() {
    const rect = this.$el.getBoundingClientRect()

    this.length = this.$refs.wrap.children.length
    this.width = rect.right - rect.left
    this.lower = -(this.length - 1) * this.width
    this.upper = 0

    for (let i = 0; i < this.length; i++) {
      this.queue.push(i)
    }

    this.adjustPosition()
  },
  methods: {
    onTouchStart(e) {
      const touch = e.touches[0]

      this.x1 = this.x2 = touch.pageX
      this.y1 = this.y2 = touch.pageY
      this.isFirst = true
      this.stop()
    },
    onTouchMove(e) {
      const touch = e.touches[0]
      const x = touch.pageX
      const y = touch.pageY

      if (this.isFirst) {
        const diff = Math.abs(this.x1 - x) - Math.abs(this.y1 - y)

        if (diff > 0) {
          this.locked = true
        } else {
          this.locked = false
        }

        this.isFirst = false
      }

      if (this.locked) {
        e.preventDefault()

        let dx = x - this.x2

        if ((this.currentPos >= this.upper && dx > 0) || (this.currentPos <= this.lower) && dx < 0) {
          dx *= 0
        }

        this.currentPos += dx
        this.x2 = x
        this.translateTo(this.currentPos)
      }
    },
    onTouchEnd(e) {
      if (this.locked) {
        const moveX = this.x2 - this.x1
        const bounceRange = this.width * 0.3
        let toIndex = this.index
        if (this.currentPos < this.upper && this.currentPos > this.lower) {
          if (moveX >= bounceRange) {
            toIndex = this.index - 1
          } else if (moveX <= -bounceRange) {
            toIndex = this.index + 1
          }
        }
        this.to(toIndex)
      }
    },
    translateTo(pos) {
      this.$refs.wrap.style.transform = this.$refs.wrap.style.webkitTransform = `translate3d(${pos}px, 0, 0)`
    },
    to(index) {
      const self = this
      const timestamp = Date.now()
      const end = -index * this.width
      const start = this.currentPos
      const ds = end - start

      this.animating = true
      this.prevIndex = this.index
      this.index = index

      ;(function animate() {
        const dt = Date.now() - timestamp

        if (dt >= self.speed) {
          return
        } else {
          self.currentPos = ds * self.ease(dt / self.speed) + start
          if (Math.abs(dt - self.speed) < 20) {
            self.currentPos = end
          }
        }

        self.translateTo(self.currentPos)
        self.raf = requestAnimationFrame(animate)
      })()
    },
    stop() {
      clearInterval(this.interval)
      cancelAnimationFrame(this.raf)
      this.running = false
    },
    adjustPosition() {
      const children = this.$refs.wrap.children

      this.queue.forEach((item, i) => {

        children[i].style.transform = 
        children[i].style.webkitTransform = 
        `translate3d(${item * this.width}px, 0, 0)`
      })
    }
  },
  watch: {
    index(newIndex) {
      this.$emit('change', newIndex)
      this.$emit('input', newIndex)
    }
  }
}
</script>

<style lang="scss">
@import "./view-pager.scss";
</style>
