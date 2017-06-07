<template>
  <div 
    class="vumo-circle"
    :style="{width: `${diameter}px`, height: `${diameter}px`}">
    <svg>
      <circle
        fill="transparent"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke="backgroundColor"
        :stroke-width="strokeWidth">
      </circle>
      <circle
        fill="transparent"
        style="transition: stroke-dasharray .6s ease"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke="strokeColor"
        :stroke-width="strokeWidth"
        :stroke-dasharray="dasharray"
        :stroke-dashoffset="offset"
        :stroke-linecap="percent !== 0 ? 'round' : ''">
      </circle>
    </svg>
    <div class="vumo-circle-content">
      <span class="vumo-circle-text">
        {{ percent + '%' }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mo-circle',
  props: {
    percent: {
      type: Number,
      default: 0,
      required: true
    },
    diameter: {
      type: Number,
      default: 150
    },
    backgroundColor: {
      type: String,
      default: 'rgba(0, 0, 0, .2)'
    },
    strokeColor: {
      type: String,
      default: '#3ba6fe'
    },
    strokeWidth: {
      type: Number,
      default: 8
    }
  },
  computed: {
    center() {
      return this.diameter / 2
    },
    radius() {
      return this.center - this.strokeWidth / 2
    },
    circle() {
      return this.radius * 2 * Math.PI
    },
    dasharray() {
      return `${this.percent / 100 * this.circle} ${this.circle}`
    },
    offset() {
      return 0
    }
  }
}
</script>

<style lang="scss">
@import "./circle.scss";
</style>
