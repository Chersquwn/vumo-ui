<template>
  <div class="vumo-modal">
    <mo-mask :show="show" @click.native="handleClick"></mo-mask>
    <transition name="vumo-modal">
      <div class="vumo-modal-main" v-show="show">
        <header class="vumo-modal-header">
          <slot name="header"></slot>
        </header>
        <div class="vumo-modal-content">
          <slot name="content"></slot>
        </div>
        <footer class="vumo-modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
import MoMask from '../mask'

export default {
  name: 'mo-modal',
  components: {
    MoMask
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    open() {
      this.show = true
    },
    close() {
      this.show = false
    },
    handleClick() {
      if (!this.disabled) this.close()
    }
  }
}
</script>

<style lang="scss">
@import "./modal.scss";
</style>
