<template>
  <div>
    <!-- <h1>消息编号：{{$route.query.id}}</h1>
    <h1>消息标题：{{$route.query.title}}</h1> -->
    <h1>消息编号：{{id}}</h1>
    <h1>消息标题：{{title}}</h1>
  </div>
</template>
<script>
export default {
  props:['id','title'],
  data() {
    return {
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log(this)
  },
};
</script>
<style scoped>
</style>