<template>
  <ul class="vumo-checklist">
    <li class="vumo-checklist-item" v-for="option in options">
      <label class="vumo-checkbox">
        <input 
          type="checkbox" 
          class="vumo-checkbox-input"
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
  name: 'mo-checklist',
  props: {
    options: {
      type: Array,
      default: [],
      required: true
    },
    value: Array
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
