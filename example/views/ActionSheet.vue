<template>
  <div>
    <header>
      ActionSheet
    </header>
    <div class="group">
      <mo-button size="large" @click="popup()">action sheet</mo-button>
    </div>
    <mo-action-sheet ref="actionsheet" :actions="actions" cancelText="取消"></mo-action-sheet>
  </div>
</template>

<script>
export default {
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
header {
  text-align: center;
}
.group {
  margin: 10px 0;
  vertical-align: middle;
}
p {
  margin: 0;
}
</style>

