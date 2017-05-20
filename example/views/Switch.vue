<template>
  <div>
    <header>
      Switch
    </header>
    <div class="group">
      <mo-switch v-model="value">
        {{ value }}
      </mo-switch>
    </div>
    <div class="group">
      <mo-switch v-model="value2" disabled>
        禁用
      </mo-switch>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: false,
      value2: true
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

