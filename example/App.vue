<template>
  <transition :name="'page-' + direction">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      direction: 'in'
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  overflow: hidden;
}

.page {
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;

  &-content {
    position: absolute;
    top: 52px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
