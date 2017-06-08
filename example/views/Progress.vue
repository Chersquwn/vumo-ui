<template>
  <div>
    <header>
      Progress
    </header>
    <div class="group">
      <mo-progress :percent="percent">
        <span slot="append">{{ percent + '%' }}</span>
      </mo-progress>
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
      percent: 20
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
