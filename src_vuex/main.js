import Vue from 'vue'
import App from './App.vue'
import store from './store'
Vue.config.productionTip = false

// const Demo = Vue.extend({})
// Vue.prototype.x= new Demo()
new Vue({
  render: h => h(App),
  // template:'<h1>hahhah</h1>'
  // render(createElement){
  //   return createElement('h1','你好啊')
  // }
  store,
  beforeCreate(){//在数据监控之前调用
    Vue.prototype.$bus= this//安装全局事件总线
  }

}).$mount('#app')
