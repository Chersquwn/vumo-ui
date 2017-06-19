<template>
  <div class="vumo-picker">
    <div 
      class="vumo-picker-container"
      :style="{height: (itemHeight * count) + 'px'}">
      <div class="vumo-picker-mask"></div>
      <div class="vumo-picker-indicator"></div>
      <div 
        class="vumo-picker-column" 
        :data-column="index"  
        :id="`vumo-picker-${uuid}-${index}`"
        v-for="index in column">
        <picker-slot 
          :data="slotData[index - 1]"
          :height="itemHeight"
          :pos="columnData[index - 1]"
          :count="count">
        </picker-slot>
      </div>
    </div>
  </div>
</template>

<script>
import Popup from '../popup'
import PickerSlot from './picker-slot'

export default {
  name: 'mo-picker',
  components: {
    PickerSlot
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
    value: {
      type: Array,
      default() {
        return []
      }
    },
    itemHeight: {
      type: Number,
      default: 36
    },
    count: {
      type: Number,
      default: 7
    }
  },
  mounted() {
    
  },
  computed: {
    columnData() {
      const arr = []

      for (let i = 0; i < this.data.length; i++) {
        const idx = this.data[i].indexOf(this.value[i])

        if (idx !== -1) {
          arr[i] = (Math.floor(this.count / 2) - idx) * this.itemHeight
        } else {
          arr[i] = Math.floor(this.count / 2) * this.itemHeight
        }
      }
      return arr
    },
    currentValue() {
      return this.value
    },
    slotData() {
      let result

      if (Array.isArray(this.data[0])) {
        result = this.data
      }

      return result
    }
  },
  data() {
    return {
      uuid: Math.random().toString(16).slice(3, 8),
    }
  },
  methods: {
    open() {
      this.$refs.picker.open()
    }
  }
}
</script>

<style lang="scss">
@import "./picker.scss";
</style>
