import Index from '../views/Index'
import Buttons from '../views/Buttons'
import Switch from '../views/Switch'
import Checklist from '../views/Checklist'
import Radiolist from '../views/Radiolist'
import Toast from '../views/Toast'

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
  }
]

export default routes
