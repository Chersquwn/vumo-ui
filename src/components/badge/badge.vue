<template>
  <span 
    class="vumo-badge"
    :class="[
      'vumo-badge-' + size,
      {
        'vumo-badge-dot': value === ''
      }
    ]"
    :style="{backgroundColor: color}">
    {{ value }}
  </span>
</template>

<script>
export default {
  name: 'mo-badge',
  props: {
    color: String,
    value: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: 'normal'
    }
  }
}
</script>

<style lang="scss">
@import "./badge.scss";
</style>
