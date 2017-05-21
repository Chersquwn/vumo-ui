<template>
  <div>
    <header>
      Radio
    </header>
    <div class="group">
      <mo-radio>
        选项A
      </mo-radio>
    </div>
    <div class="group">
      <mo-radiolist :options="options1" v-model="value1"></mo-radiolist>
      {{ value1 }}
    </div>
    <div class="group">
      <mo-radiolist :options="options2" v-model="value2"></mo-radiolist>
      {{ value2 }}
    </div>
  </div>
</template>

<script>
export default {
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
          value: 'A'
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
      value1: '',
      value2: 'A'
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

