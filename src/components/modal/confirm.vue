<template>
  <modal ref="confirm" disabled>
    <template slot="header">
      {{ title }}
    </template>
    <template slot="content">
      {{ content }}
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
  name: 'mo-confirm',
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
    }
  },
  methods: {
    open() {
      this.$refs.confirm.open()
    },
    cancel() {
      this.$refs.confirm.close()
      this.$emit('cancel')
    },
    confirm() {
      this.$refs.confirm.close()
      this.$emit('confirm')
    }
  }
}
</script>
