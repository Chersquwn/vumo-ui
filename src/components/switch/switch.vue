<template>
  <label class="vumo-switch">
    <input 
      type="checkbox" 
      class="vumo-switch-input"
      :disabled="disabled"
      v-model="currentValue">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'mo-switch',
  props: {
    disabled: Boolean,
    value: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>


<style lang="scss">
@import "./switch.scss";
</style>
