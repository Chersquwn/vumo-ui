import Index from '../views/Index'
import Buttons from '../views/Buttons'
import Switch from '../views/Switch'

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
  }
]

export default routes
