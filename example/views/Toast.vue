<template>
  <div>
    <page-header>
      Toast
    </page-header>
    <main class="page-content">
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
    </main>
  </div>
</template>

<script>
import PageHeader from '../components/Header'

export default {
  components: {
    PageHeader
  },
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
.group {
  margin: 10px 0;
  vertical-align: middle;
}
</style>

