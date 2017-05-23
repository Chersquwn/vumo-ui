<template>
  <div class="vumo-slider"
    @touchstart="onTouchStart($event)"
    @touchmove="onTouchMove($event)"
    @touchend="onTouchEnd($event)">
    <div 
      class="vumo-slider-list" 
      :style="{paddingBottom: height}"
      ref="slider">
      <slot></slot>
    </div>
    <div class="vumo-slider-nav">
      <span 
        class="vumo-slider-nav-item" 
        v-for="(item, $index) in queue"
        :data-index="{$index}"
        :class="{ 'is-active': $index === index }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mo-slider',
  props: {
    height: {
      type: String
    },
    speed: {
      type: Number,
      default: 400
    },
    duration: {
      type: Number,
      default: 5000
    },
    auto: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      index: 0,
      prevIndex: 0,
      isFirst: false,
      currentPos: 0,
      queue: [],
      ease(x) {
        return Math.sqrt(1 - Math.pow(x - 1, 2))
      }
    }
  },
  mounted() {
    const rect = this.$el.getBoundingClientRect()

    this.length = this.$children.length
    this.rectValue = rect.right - rect.left
    this.lower = -(this.length - 1) * this.rectValue
    this.upper = 0

    for (let i = 0; i < this.length; i++) {
      if (this.loop && i === this.length - 1) {
        this.queue.push(-1)
      } else {
        this.queue.push(i)
      }
    }

    this.adjustPosition()
    this.auto && this.run()
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

        if (!this.loop) {
          if ((this.currentPos >= this.upper && dx > 0) || (this.currentPos <= this.lower) && dx < 0) {
            dx *= 0.2
          }
        }

        this.currentPos += dx
        this.x2 = x
        this.translateTo(this.currentPos)
      }
    },
    onTouchEnd() {
      if (this.locked) {
        const moveX = this.x2 - this.x1
        const bounceRange = this.rectValue * 0.3
        let toIndex = this.index
        if (!this.loop) {
          if (this.currentPos < this.upper && this.currentPos > this.lower) {
            if (moveX >= bounceRange) {
              toIndex = this.index - 1
            } else if (moveX <= -bounceRange) {
              toIndex = this.index + 1
            }
          }
        } else {
          if (moveX >= bounceRange) {
            toIndex = (this.index - 1 + this.length) % this.length
          } else if (moveX <= -bounceRange) {
            toIndex = (this.index + 1 + this.length) % this.length
          }
        }
        this.to(toIndex)
      }
    },
    translateTo(pos) {
      this.$refs.slider.style.transform = this.$refs.slider.style.webkitTransform = `translate3d(${pos}px, 0, 0)`
    },
    to(index, animate = true) {
      const self = this
      const timestamp = Date.now()
      let step = index - this.index
      if (step <= -(this.length - 1)) {
        step = step + this.length
      } else if (step >= this.length - 1) {
        step = step - this.length
      }
      const end = this.loop ? -step * this.rectValue : -index * this.rectValue
      const start = this.currentPos
      const ds = end - start

      this.animating = true
      this.prevIndex = this.index
      this.index = index

      ;(function animate() {
        const dt = Date.now() - timestamp

        if (dt >= self.speed) {
          if (self.index !== self.prevIndex) {
            if (self.loop) {
              step > 0 ? self.queue.unshift(self.queue.pop()) : self.queue.push(self.queue.shift())
              self.adjustPosition()
              self.currentPos = 0
              self.translateTo(self.currentPos)
            }
          }
          if (self.auto && !self.running) {
            self.run()
          }
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
      !this.loop && cancelAnimationFrame(this.raf)
      this.running = false
    },
    run() {
      this.running = true
      this.interval = setInterval(() => {
        this.to((this.index + 1) % this.length)
      }, this.duration)
    },
    adjustPosition() {
      const children = this.$children

      this.queue.forEach((item, i) => {
        children[i].$el.style.transform = 
        children[i].$el.style.webkitTransform = 
        `translate3d(${item * this.rectValue}px, 0, 0)`
      })
    }
  }
}
</script>

<style lang="scss">
@import "./slider.scss";
</style>
