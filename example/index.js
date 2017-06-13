import Vue from 'vue'
import Router from 'vue-router'
import Vumo from 'src'
import routes from './routes'
import App from './App'

Vue.use(Router)
Vue.use(Vumo)

const router = new Router({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
