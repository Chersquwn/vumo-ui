import Vue from 'vue'
import Router from 'vue-router'
import { 
  Button,
  Switch
} from 'src'
import routes from './routes'
import App from './App'

Vue.use(Router)

const router = new Router({
  routes
})

Vue.component(Button.name, Button)
Vue.component(Switch.name, Switch)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
