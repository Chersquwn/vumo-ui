<template>
  <div>
    <page-header>
      Card
    </page-header>
    <main class="page-content">
      <div class="group">
        <mo-card>
          <div class="title" slot="header">
            <h3>这是一个卡片</h3>
          </div>
          <div class="content">
            <p>
              我是内容
            </p>
          </div>
          <div class="footer">
            <a href="">查看更多</a>
          </div>
        </mo-card>
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

