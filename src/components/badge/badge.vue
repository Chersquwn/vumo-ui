<template>
  <span 
    class="vumo-badge"
    :class="[
      'vumo-badge-' + size,
      {
        'vumo-badge-dot': value === ''
      }
    ]"
    :style="{backgroundColor: color}">
    {{ value }}
  </span>
</template>

<script>
export default {
  name: 'mo-badge',
  props: {
    color: String,
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    if (this.draggable) {
      this.$el.addEventListener('touchstart', e => {
        this.onTouchStart(e)
      })
      this.$el.addEventListener('touchmove', e => {
        this.onTouchMove(e)
      })
      this.$el.addEventListener('touchend', e => {
        this.onTouchEnd(e)
      })

      const rect = this.$el.getBoundingClientRect()

      this.pos = {}
      this.pos.x = rect.left + rect.width / 2
      this.pos.y = rect.top + rect.height / 2
    }
  },
  methods: {
    onTouchStart(e) {
      const touch = e.touches[0]

      this.touched = true
    },
    onTouchMove(e) {
      const touch = e.touches[0]
      const x = touch.pageX
      const y = touch.pageY
      const dx = x - this.pos.x
      const dy = y - this.pos.y

      this.translateTo(dx, dy)
    },
    onTouchEnd(e) {
      this.touched = false
      this.$emit('drag')
    },
    translateTo(x, y) {
      this.$el.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }
  }
}
</script>

<style lang="scss">
@import "./badge.scss";
</style>
