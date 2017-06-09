<template>
  <cell
    class="vumo-cell-slider"
    :label="label"
    :desc="desc"
    :value="value"
    :to="to"
    @touchstart.native="onTouchStart"
    @touchmove.native="onTouchMove"
    @touchend.native="onTouchEnd"
    ref="cellSlider">
    <div 
      class="vumo-cell-slider-actions" 
      slot="append"
      ref="append">
      <a 
        class="vumo-cell-slider-button" 
        v-for="action in actions"
        :style="action.style"
        @click="handleClick(action)">
        {{ action.name }}
      </a>
    </div>
  </cell>
</template>


<script>
import Cell from './cell'

export default {
  name: 'mo-cell-slider',
  components: {
    Cell
  },
  props: {
    to: [String, Object],
    label: String,
    desc: String,
    value: String,
    actions: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isFirst: false,
      currentPos: 0
    }
  },
  mounted() {
    this.append = this.$refs.append.parentNode
    this.cell = this.$refs.cellSlider.$refs.cell

    const rect = this.append.getBoundingClientRect()

    this.width = rect.right - rect.left
  },
  methods: {
    onTouchStart(e) {
      const touch = e.touches[0]

      this.cell.style.transition = ''
      this.x1 = this.x2 = touch.pageX
      this.y1 = this.y2 = touch.pageY
      this.isFirst = true
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

        if ((this.currentPos >= 0 && dx > 0) || (this.currentPos <= -this.width) && dx < 0) {
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

        this.cell.style.transition = 'transform .3s ease'

        if (this.currentPos < -this.width / 2) {
          this.currentPos = -this.width
        } else {
          this.currentPos = 0
        }
        this.translateTo(this.currentPos)
      }
    },
    translateTo(pos) {
      this.cell.style.transform = this.cell.style.webkitTransform = `translate3d(${pos}px, 0, 0)`
    },
    handleClick(action) {
      if (action.methods && typeof action.methods === 'function') {
        action.methods(action)
        this.translateTo(0)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
