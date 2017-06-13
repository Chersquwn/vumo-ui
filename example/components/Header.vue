<template>
  <header class="page-header">
    <router-link class="page-back" to="/" v-if="$route.path !== '/'"></router-link>
    <h1 class="page-title">
      <slot></slot>
    </h1>
  </header>  
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.page {
  &-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    text-align: center;
    padding: 14px;
    box-shadow: 0 3px 6px rgba(27, 27, 27, .3);
    background-color: #f2f2f2;
  }

  &-back {
    position: absolute;
    width: 52px;
    height: 52px;
    left: 0;
    top: 0;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      border-width: 1px 0 0 1px;
      border-style: solid;
      border-color: #666;
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  &-title {
    font-size: 18px;
    font-weight: normal;
    color: #333;
  }
}
</style>

