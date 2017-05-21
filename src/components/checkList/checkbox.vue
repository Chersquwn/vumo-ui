<template>
  <label class="vumo-checkbox">
    <input 
      type="checkbox" 
      class="vumo-checkbox-input"
      :disabled="disabled"
      :value="value"
      v-model="currentValue">
    <slot></slot>
  </label>
</template>

<script>
export default {
  name: 'mo-checkbox',
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
@import "./checkbox.scss";
</style>
