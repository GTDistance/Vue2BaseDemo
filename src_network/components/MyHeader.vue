<template>
  <div>
    <h1>学校名：{{name}}</h1>
    <button @click="getData1">点我请求1</button>
    <button @click="getData2">点我请求2</button>

  </div>
</template>
<script>
import axios from "axios";
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
  methods: {
    getData1() {
      axios.get('http://172.20.104.201:8080/thomas/server').then(
        (response) => {
          console.info('response',response)
        },
        (error) => {
          console.info('error',error)
        }
      );
    },
    getData2() {
      axios.get('http://localhost:8080/thomas/server').then(
        (response) => {
          console.info('response',response)
        },
        (error) => {
          console.info('error',error)
        }
      );
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