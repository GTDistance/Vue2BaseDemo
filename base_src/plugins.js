export default {
  install(Vue,x,y,z){
    console.log('install',Vue,x,y,z)
    Vue.mixin({
      data(){
        return{
          test:'hello'
        }
      }
    })
  }
}
