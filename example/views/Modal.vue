<template>
  <div>
    <header>
      Modal
    </header>
    <div class="group">
      <mo-button size="large" @click="openAlert">alert</mo-button>
    </div>
    <div class="group">
      <mo-button size="large" @click="openConfirm">confirm</mo-button>
    </div>
    <div class="group">
      <mo-button size="large" @click="openPrompt">prompt</mo-button>
    </div>
    <div class="group">
      <mo-button size="large" @click="openModal">modal</mo-button>
    </div>
    <mo-alert 
      ref="alert" 
      title="Alert" 
      content="Hello!">
    </mo-alert>
    <mo-confirm 
      ref="confirm" 
      title="Confirm" 
      content="Hello!" 
      @cancel="cancel" 
      @confirm="confirm">
    </mo-confirm>
    <mo-prompt 
      ref="prompt" 
      title="Prompt" 
      content="Please enter your name!" 
      @cancel="cancel" 
      @confirm="confirm" 
      v-model="input">
    </mo-prompt>
    <mo-modal ref="modal">
      <div slot="header">
        自定义modal
      </div>
      <div slot="content">
        这是一个自定义的modal
      </div>
      <div class="button-container" slot="footer">
        <div class="group">
          <mo-button size="large" @click="cancel">自定义button1</mo-button>
        </div>
        <div class="group">
          <mo-button size="large" @click="confirm">自定义button2</mo-button>
        </div>
      </div>
    </mo-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }  
  },
  methods: {
    openAlert() {
      this.$refs.alert.open()
    },
    openConfirm() {
      this.$refs.confirm.open()
    },
    openPrompt() {
      this.$refs.prompt.open()
    },
    openModal() {
      this.$refs.modal.open()
    },
    cancel() {
      console.log('取消')
    },
    confirm() {
      console.log(this.input)
      console.log('确定')
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
.button-container {
  padding: 5px 15px;
}
</style>

