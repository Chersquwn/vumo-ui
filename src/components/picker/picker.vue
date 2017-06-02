<template>
  <div class="vumo-picker">
    <popup ref="picker">
      <div class="vumo-picker-container">
        <div class="vumo-picker-column" :data-column="index" v-for="index in column">
          <ul class="vumo-picker-list" v-if="index === 1">
            <li class="vumo-picker-item" v-for="item in data">
              <span>{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </popup>
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
      default: 0
    }
  },
  computed: {
    
  },
  methods: {
    open() {
      this.$refs.picker.open()
    }
  }
}
</script>
