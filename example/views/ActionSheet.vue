<template>
  <div>
    <page-header>
      ActionSheet
    </page-header>
    <main class="page-content">
      <div class="group">
        <mo-button size="large" @click="popup()">action sheet</mo-button>
      </div>
      <mo-action-sheet ref="actionsheet" :actions="actions" cancelText="取消"></mo-action-sheet>
    </main>
  </div>
</template>

<script>
import PageHeader from '../components/Header'

export default {
  components: {
    PageHeader
  },
  data() {
    return {
      actions:[{
        name: '拍照',
        method() {
          console.log('打开相机')
        }
      }, {
        name: '从相册中选择',
        method() {
          console.log('打开相册')
        }
      }]
    }
  },
  methods: {
    popup() {
      this.$refs.actionsheet.open()
    }
  }
}
</script>

<style lang="scss">
.group {
  margin: 10px 0;
  vertical-align: middle;
}
p {
  margin: 0;
}
</style>

