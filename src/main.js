import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入vant组件库的按需导入配置文件
import '@/utils/vant-ui'
import '@/styles/common.less'

// vant组件-全部导入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// // 插件安装初始化：内部会将所有的vant里的所有组件进行导入注册
// Vue.use(Vant)

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
