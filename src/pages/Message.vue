<template>
  <div>
    <h1>Message</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`">{{item.title}}</router-link> -->
        <router-link :to="{
          path:'/home/message/detail',
          query:{
            id:item.id,
            title:item.title,
          }
        }">{{item.title}}</router-link>
      </li>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: "001",
          title: "消息001",
        },
        {
          id: "002",
          title: "消息002",
        },
        {
          id: "003",
          title: "消息003",
        },
      ],
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
</style>