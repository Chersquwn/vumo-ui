<template>
  <div class="vumo-card">
    <header class="vumo-card-header">
      <slot name="header"></slot>
    </header>
    <div class="vumo-card-content">
      <slot></slot>
    </div>
    <div class="vumo-card-footer">
      <slot name="vumo-card-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mo-card'
}
</script>

<style lang="scss">
@import "./card.scss";
</style>
