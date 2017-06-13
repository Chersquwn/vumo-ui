import ActionSheet from 'components/action-sheet'
import Badge from 'components/badge'
import Button from 'components/button'
import Card from 'components/card'
import { Cell, CellSlider } from 'components/cell'
import { Checkbox, Checklist } from 'components/checklist'
import Circle from 'components/circle'
import { Modal, Alert, Confirm, Prompt } from 'components/modal'
import Picker from 'components/picker'
import Popup from 'components/popup'
import Progress from 'components/progress'
import { Radio, Radiolist } from 'components/radiolist'
import { Slider, SliderItem } from 'components/slider'
import ScrollView from 'components/scroll-view'
import Switch from 'components/switch'
import Toast from 'components/toast'
import { ViewPager, ViewPagerItem, ViewPagerTab } from 'components/view-pager'

const components = {
  ActionSheet,
  Alert,
  Badge,
  Button,
  Card,
  Cell,
  CellSlider,
  Checkbox,
  Checklist,
  Circle,
  Confirm,
  Modal,
  Picker,
  Prompt,
  Progress,
  Popup,
  Radio, 
  Radiolist,
  Slider,
  SliderItem,
  Switch,
  ScrollView,
  Toast,
  ViewPager,
  ViewPagerItem,
  ViewPagerTab,
}

function install(Vue) {
  Object.keys(components).forEach(key => {
    const component = components[key]

    Vue.component(component.name, component)
  })
}

if (typeof window !== undefined && window.Vue) {
  install(window.Vue)
}

components.install = install

export default components
