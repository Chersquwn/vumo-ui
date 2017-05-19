import Vue from 'vue'
import { Button } from 'src'
import App from './App'

Vue.component(Button.name, Button)

new Vue({
  render: h => h(App)
}).$mount('#app')
