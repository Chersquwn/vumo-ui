<template>
  <div class="vumo-popup">
    <mo-mask :show="show" @click.native="handleClick"></mo-mask>
    <transition :name="transition">
      <div 
        class="vumo-popup-main"
        :class="positionClass"
        v-show="show">
        <header class="vumo-popup-header">
          <slot name="header">
            <button class="vumo-popup-button vumo-popup-cancel" @click="cancel">取消</button>
            <button class="vumo-popup-button vumo-popup-confirm" @click="confirm">确定</button>
          </slot>
        </header>
        <div class="vumo-popup-content">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MoMask from '../mask'

export default {
  name: 'mo-popup',
  components: {
    MoMask
  },
  props: {
    position: {
      type: String,
      default: 'bottom'
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
        case 'left':
          return 'vumo-popup-from-left'
        case 'right':
          return 'vumo-popup-from-right'
        default:
          return 'vumo-popup-from-bottom'
      }
    },
    positionClass() {
      const classes = []

      switch (this.position) {
        case 'left':
          classes.push('is-left')
          break;
        case 'right':
          classes.push('is-right')
          break
        default:
          classes.push('is-bottom')
          break;
      }

      return classes
    }
  },
  methods: {
    handleClick() {
      this.show = false
    },
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
    cancel() {
      this.close()
      this.$emit('cancel')
    },
    confirm() {
      this.close()
      this.$emit('confirm')
    }
  }
}
</script>

<style lang="scss">
@import "./popup.scss";
</style>
