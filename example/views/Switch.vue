<template>
  <div>
    <page-header>
      Switch
    </page-header>
    <main class="page-content">
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
      value: false,
      value2: true
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

