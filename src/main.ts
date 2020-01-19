import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons' // icon
import '@/config/rem'// 全局引入rem
import 'reset-css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
