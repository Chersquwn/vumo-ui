<template>
  <modal ref="alert" disabled>
    <template slot="header">
      {{ title }}
    </template>
    <template slot="content">
      {{ content }}
    </template>
    <template slot="footer">
      <button class="vumo-modal-button" @click="close">
        {{ buttonText }}
      </button>
    </template>
  </modal>
</template>

<script>
import Modal from './modal'

export default {
  name: 'mo-alert',
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
    buttonText: {
      type: String,
      default: '确定'
    }
  },
  methods: {
    open() {
      this.$refs.alert.open()
    },
    close() {
      this.$refs.alert.close()
    }
  }
}
</script>
