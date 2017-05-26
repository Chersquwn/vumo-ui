import Index from '../views/Index'
import Buttons from '../views/Buttons'
import Switch from '../views/Switch'
import Checklist from '../views/Checklist'
import Radiolist from '../views/Radiolist'
import Toast from '../views/Toast'
import Slider from '../views/Slider'
import ViewPager from '../views/ViewPager'
import Modal from '../views/Modal'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/buttons',
    name: 'buttons',
    component: Buttons
  },
  {
    path: '/switch',
    name: 'switch',
    component: Switch
  },
  {
    path: '/checklist',
    name: 'checklist',
    component: Checklist
  },
  {
    path: '/radiolist',
    name: 'radiolist',
    component: Radiolist
  },
  {
    path: '/toast',
    name: 'toast',
    component: Toast
  },
  {
    path: '/slider',
    name: 'slider',
    component: Slider
  },
  {
    path: '/viewpager',
    name: 'viewpager',
    component: ViewPager
  },
  {
    path: '/modal',
    name: 'modal',
    component: Modal
  }
]

export default routes
