<template>
  <div >
    <MyHeader v-on:changeName="changeName"/>
    <MyList/>
    <MyFooter/>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  name: "App",
  components: {
    MyHeader,
    MyList,
    MyFooter
  },
  methods:{
    changeName(data){
      console.info('changeName',data)
    }
  }
};
</script>

<style lang="less">

</style>
