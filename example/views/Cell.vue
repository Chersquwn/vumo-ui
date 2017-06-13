<template>
  <div>
    <page-header>
      Cell
    </page-header>
    <main class="page-content">
      <div class="group">
        <mo-cell label="标题"></mo-cell>
        <mo-cell label="标题" value="说明文字"></mo-cell>
        <mo-cell label="标题" desc="信息描述"></mo-cell>
        <mo-cell label="标题" desc="信息描述" value="说明文字"></mo-cell>
        <mo-cell label="标题" desc="路由跳转" to="/modal"></mo-cell>
        <mo-cell label="标题" desc="外链跳转" to="https://www.baidu.com.cn"></mo-cell>
      </div>
      <div class="group">
        <mo-cell-slider label="标题" :actions="actions"></mo-cell-slider>
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
      actions: [{
        name: '置顶',
        style: {
          backgroundColor: 'lightgray',
          color: '#fff'
        },
        methods() {
          console.log('置顶操作')
        }
      }, {
        name: '删除',
        style: {
          backgroundColor: 'red',
          color: '#fff'
        },
        methods() {
          console.log('删除操作')
        }
      }]
    }
  }
}
</script>

<style lang="scss">
body {
  padding: 10px 0 0 0;

  > div {
    overflow: hidden;
  }
}
.group {
  margin: 10px 0;
  vertical-align: middle;
}
</style>
