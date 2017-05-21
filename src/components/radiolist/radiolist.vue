<template>
  <ul class="vumo-radiolist">
    <li class="vumo-radiolist-item" v-for="option in options">
      <label class="vumo-radio">
        <input 
          type="radio" 
          class="vumo-radio-input"
          :disabled="option.disabled"
          :value="option.value || option"
          v-model="currentValue">
          {{ option.label || option }}
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'mo-radiolist',
  props: {
    options: {
      type: Array,
      default: [],
      required: true
    },
    value: String
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
