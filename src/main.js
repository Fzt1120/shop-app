import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from '@/store/index.js'
import '@/permission.js'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

