<template>
  <div>
    <h1>人员列表</h1>
    <input type="text" v-model.trim="name"> <button @click="addPerson">添加</button>
    <ul>
      <li v-for="(item ) in personList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name:'Person',
  data() {
    return {
      name:''
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
  },
  computed:{
    ...mapState('personAbout',['personList']),
  },
  methods:{
    addPerson(){
      this.$store.commit('personAbout/ADD_PERSON',{
        id:new Date().getTime(),
        name : this.name
      })
    }
  }
};
</script>
<style scoped>
</style>