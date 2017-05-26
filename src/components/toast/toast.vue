<template>
  <div>
    <transition :name="transition">
      <div 
        class="vumo-toast"
        :class="positionClass"
        v-show="show">
        <span class="vumo-toast-icon" v-if="icon || $slots.icon">
          <slot name="icon"></slot>
        </span>
        <p class="vumo-toast-text">
          <slot></slot>
        </p>
      </div>
    </transition>
    <div class="vumo-toast-mask" v-show="show"></div>
  </div>
</template>

<script>
export default {
  name: 'mo-toast',
  props: {
    icon: Boolean,
    duration: {
      type: Number,
      default: 1300
    },
    position: {
      type: String,
      default: 'middle'
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    transition() {
      switch (this.position) {
        case 'top':
          return 'vumo-slide-from-top'
        case 'bottom':
          return 'vumo-slide-from-bottom'
        default:
          return 'vumo-pop-from-middle'
      }
    },
    positionClass() {
      const classes = []

      if (this.icon) classes.push('is-square')

      switch (this.position) {
        case 'top':
          classes.push('is-top')
          break;
        case 'bottom':
          classes.push('is-bottom')
          break
        default:
          classes.push('is-middle')
          break;
      }

      return classes
    }
  },
  methods: {
    open() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, this.duration)
    }
  }
}
</script>

<style lang="scss">
@import "./toast.scss";
</style>
