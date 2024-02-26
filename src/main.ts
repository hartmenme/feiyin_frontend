// 重置css
import './styles/reset.scss'

import { createApp } from 'vue'
import App from './App.vue'
// 引入路由
import router from "@/router/index"


// 引入路由

// elementPlus 引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
// 载入elementIcon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.use(ElementPlus)
app.use(router)
app.mount('#app')