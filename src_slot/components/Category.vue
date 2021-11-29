<template>
  <div class="category">
    <h1>{{title}}分类</h1>
    <slot>没有东西我就会出现哦1</slot>
    <slot>没有东西我就会出现哦2</slot>
    <slot :data='datas' name="haha"></slot>
  </div>
</template>
<script>
export default {
  name:'Category',
  props:['listData','title'],
  data() {
    return {
      datas:['lalal','heheh','dyysaya']
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
.category{
  background-color: aqua;
  width: 200px;
  height: 300px;
}
</style>