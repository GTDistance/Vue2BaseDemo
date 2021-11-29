<template>
  <div class="category">
    <mavon-editor v-model="value" :ishljs = "true"/>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {
      n: 1,
      value:''
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    // console.log("mounted", this);
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeRouteEnter(to, from, next) {
    // ...
    console.log("beforeRouteEnter");
    next()
  },
  beforeRouteLeave(to, from, next) {
    // ...
    console.log("beforeRouteLeave");
    next()
  },
};
</script>
<style scoped>
</style>