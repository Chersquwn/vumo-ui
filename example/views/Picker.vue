<template>
  <div>
    <header>
      Picker
    </header>
    <div class="group">
      <mo-button size="large" @click="popup()">popup bottom</mo-button>
    </div>
    <mo-picker ref="picker" :data="json" :column="3">
      <div slot="content">
        <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
      </div>
    </mo-picker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      json: [
        {
          level: 0,
          value: '广东',
          children: [
            {
              level: 1,
              value: '深圳',
              children: [
                {
                  level: 2,
                  value: '南山区'
                },
                {
                  level: 2,
                  value: '罗湖区'
                },
                {
                  level: 2,
                  value: '福田区'
                }
              ]
            },
            {
              level: 1,
              value: '广州',
              children: [
                {
                  level: 2,
                  value: '天河区'
                },
                {
                  level: 2,
                  value: '越秀区'
                },
                {
                  level: 2,
                  value: '番禺区'
                }
              ]
            }
          ]
        },
        {
          level: 0,
          value: '香港',
          children: [
            {
              level: 1,
              value: '香港'
            }
          ]
        }
      ]
    }  
  },
  methods: {
    popup() {
      this.$refs.picker.open()
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

