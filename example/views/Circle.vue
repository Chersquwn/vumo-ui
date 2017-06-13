<template>
  <div>
    <page-header>
      Circle
    </page-header>
    <main class="page-content">
      <div class="group">
        <mo-circle :percent="percent"></mo-circle>
        <mo-button @click="count">
          +20%
        </mo-button>
      </div>
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
.group {
  margin: 10px 0;
  vertical-align: middle;
}
</style>
