<template>
  <transition name="vumo-mask">
    <div class="vumo-mask" v-show="show" @click="click && click()"></div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: null
    }
  }
}
</script>

<style lang="scss">
@import "./mask.scss";
</style>
