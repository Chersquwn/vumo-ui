<template>
  <div class="main">
    <mo-view-pager @change="change">
      <template slot="tabbar">
        <mo-view-pager-tab :class="{'is-active': activeIndex === 0}">tab1</mo-view-pager-tab>
        <mo-view-pager-tab :class="{'is-active': activeIndex === 1}">tab2</mo-view-pager-tab>
        <mo-view-pager-tab :class="{'is-active': activeIndex === 2}">tab3</mo-view-pager-tab>
      </template>
      <template slot="container">
        <mo-view-pager-item>
          <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
        </mo-view-pager-item>
        <mo-view-pager-item>
          <p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p><p>2</p>
        </mo-view-pager-item>
        <mo-view-pager-item>
          <p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p><p>3</p>
        </mo-view-pager-item>
      </template>
    </mo-view-pager>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    change(val) {
      this.activeIndex = val
    }
  }
}
</script>


<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
}
.main {
  height: 100%;
}
p {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.is-active {
  color: #3ba6fe !important;
}
</style>

