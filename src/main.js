import Vue from 'vue'
// import VueResource from 'vue-resource'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
// Vue.use(VueResource)
// Vue.http.options.root = ''

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
