<template>
  <div>
    <h1>我是home</h1>
    <div>
      <router-link to="/home/news">news</router-link>
      <router-link to="/home/message">message</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name:'Home',
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
};
</script>
<style scoped>
</style>