<template>
  <div class="container">
    <div>
      <!-- 路由跳转按钮 -->
      <router-link to="/about" active-class="active">About</router-link>
      <router-link to="/home" active-class="active">Home</router-link>
    </div>
    <div>
      <!-- 指定组件的呈现位置 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="less">
.active{
  color: red;
}
</style>
