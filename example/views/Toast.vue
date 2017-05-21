<template>
  <div>
    <header>
      Toast
    </header>
    <div class="group">
      <mo-button @click="open1">点击从上弹出toast</mo-button>
    </div>
    <div class="group">
      <mo-button @click="open2">点击中间弹出toast</mo-button>
    </div>
    <div class="group">
      <mo-button @click="open3">点击从下弹出toast</mo-button>
    </div>
      <mo-toast position="top" ref="toast1">
        加载中
      </mo-toast>
      <mo-toast position="middle" ref="toast2">
        加载中
      </mo-toast>
      <mo-toast position="bottom" ref="toast3">
        加载中
      </mo-toast>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$refs.toast1.open()
    },
    open2() {
      this.$refs.toast2.open()
    },
    open3() {
      this.$refs.toast3.open()
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
</style>

