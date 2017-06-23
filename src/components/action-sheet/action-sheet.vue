<template>
  <div class="vumo-action-sheet">
    <popup ref="actionsheet">
      <div class="vumo-action-sheet-header" slot="header">
        {{ headerText }}
      </div>
      <div class="vumo-action-sheet-content">
        <ul class="vumo-action-sheet-list">
          <li 
            class="vumo-action-sheet-item" 
            v-for="(action, index) in actions" 
            :key="index"
            @click="handleAction(action)">
            {{ action.name }}
          </li>
        </ul>
        <button 
          class="vumo-action-sheet-button" 
          v-if="cancelText"
          @click="cancel">
            {{ cancelText }}
        </button>
      </div>
    </popup>
  </div>
</template>

<script>
import Popup from '../popup'

export default {
  name: 'mo-action-sheet',
  components: {
    Popup
  },
  props: {
    actions: {
      type: Array,
      default() {
        return []
      }
    },
    headerText: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleAction(action) {
      if (action.method && typeof action.method === 'function') {
        action.method(action)
        this.$refs.actionsheet.close()
      }
    },
    open() {
      this.$refs.actionsheet.open()
    },
    cancel() {
      this.$refs.actionsheet.close()
    }
  }
}
</script>

<style lang="scss">
@import "./action-sheet.scss";
</style>
