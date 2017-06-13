<template>
  <div>
    <page-header>
      Picker
    </page-header>
    <main class="page-content">
      <div class="group">
        <mo-button size="large" @click="popup()">popup bottom</mo-button>
      </div>
      <mo-picker ref="picker" :data="json" :column="3">
        <div slot="content">
          <p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p><p>1</p>
        </div>
      </mo-picker>
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
      json: [
        {
          value: '广东',
          children: [
            {
              value: '深圳',
              children: [
                {
                  value: '南山区'
                },
                {
                  value: '罗湖区'
                },
                {
                  value: '福田区'
                }
              ]
            },
            {
              value: '广州',
              children: [
                {
                  value: '天河区'
                },
                {
                  value: '越秀区'
                },
                {
                  value: '番禺区'
                }
              ]
            }
          ]
        },
        {
          value: '香港',
          children: [
            {
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
.group {
  margin: 10px 0;
  vertical-align: middle;
}
p {
  margin: 0;
}
</style>

