<template>
  <div class="vumo-cell">
    <a 
      class="vumo-cell-link" 
      :href="href"
      @click="handleClick"
      ref="cell">
      <div class="vumo-cell-prepend">
        <slot name="prepend"></slot>
      </div>
      <div class="vumo-cell-content">
        <div class="vumo-cell-title">
          <label class="vumo-cell-label">
            <slot name="label">{{ label }}</slot>
          </label>
          <span class="vumo-cell-desc" v-if="desc">
            <slot name="desc">{{ desc }}</slot>
          </span>
        </div>
        <div class="vumo-cell-value">
          <slot name="value">{{ value }}</slot>
          <span class="link-icon" v-if="href"></span>
        </div>
      </div>
      <div class="vumo-cell-append">
        <slot name="append"></slot>
      </div>
    </a>
  </div>  
</template>

<script>
export default {
  name: 'mo-cell',
  props: {
    to: [String, Object],
    label: String,
    desc: String,
    value: String
  },
  computed: {
    href() {
      if (this.to && this.$router) {
        this.resolved = this.$router.match(this.to)
        if (!this.resolved.matched.length) {
          return this.to
        } else {
          return this.resolved.path
        }
      } else {
        return this.to
      }
    }
  },
  methods: {
    handleClick($event) {
      if (this.to && this.$router && this.resolved.matched.length) {
        $event.preventDefault()
        this.$router.push(this.to)
      } else {
        this.$emit('click')
      }
    }
  }
}
</script>

<style lang="scss">
@import "./cell.scss";
</style>
