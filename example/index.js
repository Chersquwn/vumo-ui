import Vue from 'vue'
import Router from 'vue-router'
import { 
  Button,
  Switch,
  Checkbox,
  Checklist,
  Radio,
  Radiolist,
  Toast,
  Slider,
  SliderItem,
  ViewPager,
  ViewPagerItem,
  ViewPagerTab
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
Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)
Vue.component(ViewPager.name, ViewPager)
Vue.component(ViewPagerItem.name, ViewPagerItem)
Vue.component(ViewPagerTab.name, ViewPagerTab)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
