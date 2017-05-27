<template>
  <div>
    <header>
      Popup
    </header>
    <div class="group">
      <mo-button size="large" @click="popup($refs.bottom)">popup bottom</mo-button>
    </div>
    <div class="group">
      <mo-button size="large" @click="popup">confirm</mo-button>
    </div>
    <div class="group">
      <mo-button size="large" @click="popup">prompt</mo-button>
    </div>
    <div class="group">
      <mo-button size="large" @click="popup">modal</mo-button>
    </div>
    <mo-popup ref="bottom">
      <div slot="content">
        <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
      </div>
    </mo-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }  
  },
  methods: {
    popup(com) {
      com.open()
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
p {
  margin: 0;
}
</style>

