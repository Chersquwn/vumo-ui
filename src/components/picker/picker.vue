<template>
  <div class="vumo-picker">
    <div 
      class="vumo-picker-container"
      :style="{height: height + 'px'}">
      <div class="vumo-picker-mask"></div>
      <div class="vumo-picker-indicator"></div>
      <div class="vumo-picker-column" :data-column="index" v-for="index in column" :id="`vumo-picker-${uuid}-${index}`">
        <template v-if="Array.isArray(data[0])">
          <ul class="vumo-picker-list">
            <li class="vumo-picker-item" v-for="item in data[index - 1]">
              <span>{{ item }}</span>
            </li>
          </ul>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'mo-picker',
  components: {
    Popup
  },
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    column: {
      type: Number,
      default() {
        return this.data.length
      }
    },
    height: {
      type: Number,
      default: 240
    }
  },
  mounted() {
    this.uuid = Math.random().toString(16).slice(3, 8)
  },
  computed: {
    
  },
  data() {
    return {
      uuid: ''
    }
  },
  methods: {
    open() {
      this.$refs.picker.open()
    },
    render() {
      for (let i = 0; i < this.data.length; i++) {
        if (Array.isArray(this.data[i])) {

        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "./picker.scss";
</style>
