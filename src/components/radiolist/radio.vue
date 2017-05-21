<template>
  <label class="vumo-radio">
    <input 
      type="radio" 
      class="vumo-radio-input"
      :disabled="disabled"
      :value="value"
      v-model="currentValue">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'mo-radio',
  props: {
    name: String,
    value: String,
    disabled: Boolean
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
@import "./radio.scss";
</style>
