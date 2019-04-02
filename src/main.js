import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'md'
})
Vue.use(VeeValidate)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
