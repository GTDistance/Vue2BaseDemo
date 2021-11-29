<template>
  <div class="container">
    <Category title="食物" :listData="foods">
      <img class="img-icon" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F07%2F06%2F17577cd55945262.jpg%21r650&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1634541839&t=21be8706084a555c93b27936f70b1005"/>
    </Category>
    <Category title="电影" >
       <ul>
          <li v-for="(item , index) in films" :key="index">{{item}}</li>
        </ul>
    </Category>
    <Category title="游戏" :listData="games"/>
    <Category title="haha" >
      <template v-slot:haha="{data}" >
        <ul>
          <li v-for="(item , index) in data" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data(){
    return {
      foods:['番茄','沙拉','土豆'],
      films:['最美女孩','帅气男孩','good baby'],
      games:['王者荣耀','英雄联盟','地下城勇士'],
    }
  },
  methods:{
    changeName(data){
      console.info('changeName',data)
    }
  }
};
</script>

<style lang="less">
.container{
  display: flex;
  flex-direction: row;
  .img-icon{
    width: 100%;
  }
}
</style>
