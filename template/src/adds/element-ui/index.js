import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

Vue.use(ElementUI.Pagination)
Vue.use(ElementUI.Dialog)
Vue.use(ElementUI.Autocomplete)
Vue.use(ElementUI.Dropdown)
Vue.use(ElementUI.DropdownMenu)
Vue.use(ElementUI.DropdownItem)
Vue.use(ElementUI.Menu)
Vue.use(ElementUI.Submenu)
Vue.use(ElementUI.MenuItem)
Vue.use(ElementUI.MenuItemGroup)
Vue.use(ElementUI.Input)
Vue.use(ElementUI.InputNumber)
Vue.use(ElementUI.Radio)
Vue.use(ElementUI.RadioGroup)
Vue.use(ElementUI.RadioButton)
Vue.use(ElementUI.Checkbox)
Vue.use(ElementUI.CheckboxGroup)
Vue.use(ElementUI.Switch)
Vue.use(ElementUI.Select)
Vue.use(ElementUI.Option)
Vue.use(ElementUI.OptionGroup)
Vue.use(ElementUI.Button)
Vue.use(ElementUI.ButtonGroup)
Vue.use(ElementUI.Table)
Vue.use(ElementUI.TableColumn)
Vue.use(ElementUI.DatePicker)
Vue.use(ElementUI.TimeSelect)
Vue.use(ElementUI.TimePicker)
Vue.use(ElementUI.Popover)
Vue.use(ElementUI.Tooltip)
Vue.use(ElementUI.Breadcrumb)
Vue.use(ElementUI.BreadcrumbItem)
Vue.use(ElementUI.Form)
Vue.use(ElementUI.FormItem)
Vue.use(ElementUI.Tabs)
Vue.use(ElementUI.TabPane)
Vue.use(ElementUI.Tag)
Vue.use(ElementUI.Tree)
Vue.use(ElementUI.Alert)
Vue.use(ElementUI.Slider)
Vue.use(ElementUI.Icon)
Vue.use(ElementUI.Row)
Vue.use(ElementUI.Col)
Vue.use(ElementUI.Upload)
Vue.use(ElementUI.Progress)
Vue.use(ElementUI.Badge)
Vue.use(ElementUI.Card)
Vue.use(ElementUI.Rate)
Vue.use(ElementUI.Steps)
Vue.use(ElementUI.Step)
Vue.use(ElementUI.Carousel)
Vue.use(ElementUI.CarouselItem)
Vue.use(ElementUI.Collapse)
Vue.use(ElementUI.CollapseItem)
Vue.use(ElementUI.Cascader)
Vue.use(ElementUI.ColorPicker)
Vue.use(ElementUI.Container)
Vue.use(ElementUI.Header)
Vue.use(ElementUI.Aside)
Vue.use(ElementUI.Main)
Vue.use(ElementUI.Footer)

Vue.use(ElementUI.Loading.directive)

Vue.prototype.$loading = ElementUI.Loading.service
Vue.prototype.$msgbox = ElementUI.MessageBox
Vue.prototype.$alert = ElementUI.MessageBox.alert
Vue.prototype.$confirm = ElementUI.MessageBox.confirm
Vue.prototype.$prompt = ElementUI.MessageBox.prompt
Vue.prototype.$notify = ElementUI.Notification
Vue.prototype.$message = ElementUI.Message

