<template>
  <div>
    <header>
      Circle
    </header>
    <div class="group">
      <mo-circle :percent="percent"></mo-circle>
      <mo-button @click="count">
        +20%
      </mo-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      percent: 0
    }
  },
  methods: {
    count() {
      this.percent += 20
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
