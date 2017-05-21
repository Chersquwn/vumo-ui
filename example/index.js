import Vue from 'vue'
import Router from 'vue-router'
import { 
  Button,
  Switch,
  Checkbox,
  Checklist,
  Radio,
  Radiolist,
  Toast
} from 'src'
import routes from './routes'
import App from './App'

Vue.use(Router)

const router = new Router({
  routes
})

Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Checklist.name, Checklist)
Vue.component(Radio.name, Radio)
Vue.component(Radiolist.name, Radiolist)
Vue.component(Toast.name, Toast)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
