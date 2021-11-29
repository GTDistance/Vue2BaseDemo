import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import router from './router'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

// use
Vue.use(mavonEditor)

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
