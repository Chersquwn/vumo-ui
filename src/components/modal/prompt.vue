<template>
  <modal ref="prompt" disabled>
    <template slot="header">
      {{ title }}
    </template>
    <template slot="content">
      {{ content }}
      <div class="vumo-modal-expand">
        <input type="text" class="vumo-modal-input" v-model="currentValue">
      </div>
    </template>
    <template slot="footer">
      <button class="vumo-modal-button" @click="cancel">
        {{ cancelText }}
      </button>
      <button class="vumo-modal-button" @click="confirm">
        {{ confirmText }}
      </button>
    </template>
  </modal>
</template>

<script>
import Modal from './modal'

export default {
  name: 'mo-prompt',
  components: {
    Modal
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确定'
    },
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentValue: this.input
    }
  },
  methods: {
    open() {
      this.$refs.prompt.open()
    },
    cancel() {
      this.$refs.prompt.close()
      this.$emit('cancel')
    },
    confirm() {
      this.$refs.prompt.close()
      this.$emit('confirm')
    }
  },
  watch: {
    currentValue(val) {
      this.$emit('input', val)
    }
  }
}
</script>
