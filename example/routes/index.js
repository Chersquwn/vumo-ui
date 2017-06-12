import Index from '../views/Index'
import Buttons from '../views/Buttons'
import Switch from '../views/Switch'
import Checklist from '../views/Checklist'
import Radiolist from '../views/Radiolist'
import Toast from '../views/Toast'
import Slider from '../views/Slider'
import ViewPager from '../views/ViewPager'
import Modal from '../views/Modal'
import Popup from '../views/Popup'
import Picker from '../views/Picker'
import Card from '../views/Card'
import ScrollView from '../views/ScrollView'
import Circle from '../views/Circle'
import Progress from '../views/Progress'
import ActionSheet from '../views/ActionSheet'
import Cell from '../views/Cell'
import Badge from '../views/Badge'

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
  },
  {
    path: '/popup',
    name: 'popup',
    component: Popup
  },
  {
    path: '/picker',
    name: 'picker',
    component: Picker
  },
  {
    path: '/card',
    name: 'card',
    component: Card
  },
  {
    path: '/scrollview',
    name: 'scrollview',
    component: ScrollView
  },
  {
    path: '/circle',
    name: 'circle',
    component: Circle
  },
  {
    path: '/progress',
    name: 'progress',
    component: Progress
  },
  {
    path: '/actionsheet',
    name: 'actionsheet',
    component: ActionSheet
  },
  {
    path: '/cell',
    name: 'cell',
    component: Cell
  },
  {
    path: '/badge',
    name: 'badge',
    component: Badge
  }
]

export default routes
