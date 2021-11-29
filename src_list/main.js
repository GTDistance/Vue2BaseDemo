import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // template:'<h1>hahhah</h1>'
  // render(createElement){
  //   return createElement('h1','你好啊')
  // }
}).$mount('#app')
