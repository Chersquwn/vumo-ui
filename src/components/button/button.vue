<template>
  <button 
    class="vumo-button"
    :class="[
      'vumo-button-' + type,
      'vumo-button-' + size,
      {
        'is-light': light
      }
    ]"
    :disabled="disabled"
    @click="handleClick">
    <span class="vumo-button-icon" v-if="icon || $slots.icon">
      <slot name="icon"></slot>
    </span>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'mo-button',
    props: {
      type: {
        type: String,
        default: 'default',
        validator(value) {
          return ['default', 'primary', 'success', 'danger', 'warning'].includes(value)
        }
      },
      size: {
        type: String,
        default: 'medium',
        validator(value) {
          return ['medium', 'large', 'small'].includes(value)
        }
      },
      disabled: Boolean,
      icon: Boolean,
      light: Boolean
    },
    methods: {
      handleClick(e) {
        this.$emit('click', e)
      }
    }
  }
</script>

<style lang="scss">
  @import './button.scss';
</style>
