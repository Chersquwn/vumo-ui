<template>
  <div>
    <page-header>
      Checklist
    </page-header>
    <main class="page-content">
      <div class="group">
        <mo-checkbox>
          选项A
        </mo-checkbox>
      </div>
      <div class="group">
        <mo-checklist :options="options1" v-model="value1"></mo-checklist>
        {{ value1 }}
      </div>
      <div class="group">
        <mo-checklist :options="options2" v-model="value2"></mo-checklist>
        {{ value2 }}
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
      options1: [
        {
          label: '选项A',
          value: 'A'
        },
        {
          label: '选项B',
          value: 'B'
        },
        {
          label: '选项C',
          value: 'C'
        }
      ],
      options2: [
        {
          label: '选项A',
          value: 'A',
        },
        {
          label: '禁止的选项',
          value: '禁止的选项',
          disabled: true
        },
        {
          label: '选项C',
          value: 'C'
        }
      ],
      value1: [],
      value2: []
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

