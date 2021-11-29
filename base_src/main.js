import Vue from 'vue'
import App from './App.vue'
import { mixin, mixin2 } from "./mixin";
import plugins from './plugins'

Vue.config.productionTip = false
Vue.mixin(mixin)
Vue.mixin(mixin2)

Vue.use(plugins,1,2,3)//使用插件

new Vue({
  render: h => h(App),
  // template:'<h1>hahhah</h1>'
  // render(createElement){
  //   return createElement('h1','你好啊')
  // }
}).$mount('#app')
