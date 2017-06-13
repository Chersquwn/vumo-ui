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
    name: 'Index',
    component: Index
  },
  {
    path: '/actionsheet',
    name: 'ActionSheet',
    component: ActionSheet
  },
  {
    path: '/badge',
    name: 'Badge',
    component: Badge
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: Buttons
  },
  {
    path: '/card',
    name: 'Card',
    component: Card
  },
  {
    path: '/cell',
    name: 'Cell',
    component: Cell
  },
  {
    path: '/checklist',
    name: 'Checklist',
    component: Checklist
  },
  {
    path: '/circle',
    name: 'Circle',
    component: Circle
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  },
  {
    path: '/picker',
    name: 'Picker',
    component: Picker
  },
  {
    path: '/popup',
    name: 'Popup',
    component: Popup
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/radiolist',
    name: 'Radiolist',
    component: Radiolist
  },
  {
    path: '/scrollview',
    name: 'ScrollView',
    component: ScrollView
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/switch',
    name: 'Switch',
    component: Switch
  },
  {
    path: '/toast',
    name: 'Toast',
    component: Toast
  },
  {
    path: '/viewpager',
    name: 'ViewPager',
    component: ViewPager
  }
]

export default routes
