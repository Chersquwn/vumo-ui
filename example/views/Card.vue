<template>
  <div>
    <header>
      Card
    </header>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      
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

