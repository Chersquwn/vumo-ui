<template>
  <div class="page">
    <header>
      ScrollView
    </header>
    <div class="group">
      <mo-scroll-view @refresh="update" @scrollLoad="loadmore">
        <div id="list">
          <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
        </div>
      </mo-scroll-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    update(done) {
      setTimeout(function() {
        done()
      }, 2000);
    },
    loadmore(done) {
      setTimeout(function() {
        var f = document.createDocumentFragment()
        for (let i = 0; i < 20; i++) {
          let p = document.createElement('p')
          p.textContent = '2'
          f.appendChild(p)
        }
        document.getElementById('list').appendChild(f)
        done()
      }, 2000)
    }
  }
}
</script>


<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.page {
  display: flex;
  height: 100%;
  flex-direction: column;
}
header {
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .3);
}
.group {
  flex: 1;
  vertical-align: middle;
  overflow: hidden;
}
p {
  margin: 0;
}
</style>

