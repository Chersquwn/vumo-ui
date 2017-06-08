<template>
  <div 
    class="vumo-progress">
    <div class="vumo-progress-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div 
      class="vumo-progress-container" 
      :style="{height: `${height}px`}">
      <div 
        class="vumo-progress-bar"
        :style="{
          width: `${percent}%`, 
          backgroundColor: color, 
          transition: 'width .3s ease'
        }">
      </div>
    </div>
    <div class="vumo-progress-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mo-progress',
  props: {
    height: {
      type: Number,
      default: 4
    },
    percent: {
      type: Number,
      default: 0
    },
    color: {
      type: String,
      default: '#3ba6fe'
    }
  }
}
</script>

<style lang="scss">
@import "./progress.scss";
</style>
