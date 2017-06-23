<template>
  <div 
    class="vumo-picker-slot" 
    @touchstart="onTouchStart($event)"
    @touchmove="onTouchMove($event)"
    @touchend="onTouchEnd($event)">
    <ul 
      class="vumo-picker-list"
      :class="{
        'vumo-picker-animating': !touched
      }"
      :style="{transform: `translate3d(0, ${currentPos}px, 0)`}"
      ref="pickerSlot">
      <li 
        class="vumo-picker-item"
        v-for="(item, index) in data"
        :key="index"
        :style="{
          height: height + 'px', 
          'line-height': height + 'px'
        }">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'picker-slot',
  props: {
    data: [Object, Array],
    pos: Number,
    height: Number,
    count: Number
  },
  data() {
    this.offset = Math.floor(this.count / 2)

    return {
      currentPos: this.pos,
      start: this.offset * this.height,
      end: -((this.data.length - 1) - this.offset) * this.height,
      touched: false
    }
  },
  methods: {
    onTouchStart(e) {
      const touch = e.touches[0]
      
      this.touched = true
      this.y2 = this.y1 = touch.pageY
    },
    onTouchMove(e) {
      const touch = e.touches[0]
      const y = touch.pageY
      const dY = y - this.y2

      this.currentPos += dY
      this.translateTo(this.currentPos)
      this.y2 = y
    },
    onTouchEnd(e) {
      this.touched = false
      if (this.currentPos > this.start) {
        this.currentPos = this.start
      } else if (this.currentPos < this.end) {
        this.currentPos = this.end
      } else {
        const idx = Math.floor(this.currentPos / this.height)

        if (Math.abs(this.currentPos - idx * this.height) >= this.height / 2) {
          this.currentPos = (idx + 1) * this.height
        } else {
          this.currentPos = idx * this.height
        }
      }

      this.translateTo(this.currentPos)
    },
    translateTo(pos) {
      this.$refs.pickerSlot.transform = `translate3d(0, ${pos}px, 0)`
    }
  }
}
</script>
