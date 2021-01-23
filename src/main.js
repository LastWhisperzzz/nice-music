import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局样式
import './assets/stylus/index.styl'

// 图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('./assets/image/loading-bars.svg')
})

// 解决移动端派发点击事件存在300ms延迟
import fastclick from 'fastclick'
fastclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
