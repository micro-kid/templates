import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import eventbus from './store/bus'
import vant from './plugins/vant' // 全局按需引入vant 无UI库使用可注释
import utils, { parseURL } from './lib/utils' // 全局引入utils

import './assets/styles/main.scss' // 引入全局样式

document.title = import.meta.env.VITE_APP_TITLE

// debug参数控制调试工具
const urlObj = parseURL(decodeURIComponent(location.href))
urlObj.query.debug === '1' && window.eruda.init()

const app = createApp(App)

app.use(store)
app.use(router)
app.use(eventbus)

app.use(vant)
app.use(utils)

app.mount('#app')
