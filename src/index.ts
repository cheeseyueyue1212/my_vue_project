// 按需引入组件
import {Button, Input, Layout, Menu} from 'ant-design-vue'

const components = [
  Button,
  Input,
  Layout,
  Menu
]

export function setupAntd(app: any) {
  components.forEach(component => {
    app.use(component)
  })
}
