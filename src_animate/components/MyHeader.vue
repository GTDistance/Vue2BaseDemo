<template>
  <div>
    <h1>学校名：{{name}}</h1>
    <button @click="changeName">点我修改</button>
    <div>
      <button @click="show = !show">显示</button>
      <!-- <transition>
        <div v-show="show" >
          <h1  class="bgc">嘿哈</h1>
        </div>
        
      </transition> -->
      <!-- <transition name="hello">
        <div v-show="show" class="bgc-tra">
          <h1  >嘿哈</h1>
        </div>
      </transition> -->

    </div>
    <div class="wrap">
      <div class="anmi-div"></div>
      <span class="item">娜娜</span>
      <span class="item">娟娟</span>
      <span class="item">杉杉</span>
    </div>

  </div>
</template>
<script>
export default {
  name: "MyHeader",
  data() {
    return {
      name: "thomas",
      show: false,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    setTimeout(() => {
      this.$bus.$emit("hehe", "我来啦");
    }, 1000);
    console.log("mounted", this.$bus);
  },
  beforeDestroy() {
    this.$bus.$off("hehe");
  },
  methods: {
    changeName() {
      this.$emit("changeName", "thomaswang");
    },
  },
};
</script>
<style scoped>
.bgc {
  background-color: brown;
  width: 200px;
  height: 50px;
}
.bgc-tra {
  background-color: yellow;
  transition: 1s;
}
/* 进入的起点  */
.hello-enter {
  transform: translateX(-100px);
}
/* 进入的终点  */
.hello-enter-to {
  transform: translateX(0px);
}
/* .v-enter-active{
  animation: ceshi 1s;
}
.v-leave-active{
  animation: ceshi 1s reverse;
}
@keyframes ceshi{
  from{
    transform: translateX(-100px);
  }
  to{
    transform: translateX(0px);
  }
} */
.wrap {
  background: cornsilk;
  display: flex;
  flex-direction: row;
  text-align: center;
  position: relative;
}
.item {
  flex: 1;
  z-index: 3;
}
.first-div {
  flex: 1;
  
}
.anmi-div {
  position: absolute;
  background: blueviolet;
  width: 33%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 2;
}
</style>