<template>
  <div>
    <page-header>
      Badge
    </page-header>
    <main class="page-content">
      <div class="group">
        <mo-badge color="#f44336"></mo-badge>
        <mo-badge value="99"></mo-badge>
        <mo-badge value="99" size="small"></mo-badge>
        <mo-badge value="99" size="large"></mo-badge>
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from '../components/Header'

export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
.group {
  margin: 10px 0;
  vertical-align: middle;
}
</style>
