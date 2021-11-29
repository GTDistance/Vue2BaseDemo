<template>
  <div class="hello" @click="showName">
    <h1 class="xix">{{ msg }}</h1>
    <span>{{sex}}</span>
    <span>{{age}}</span>
    <span>{{name}}</span>
  </div>
</template>

<script>
// import { mixin, mixin2 } from "../mixin";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "HelloWorld",
    };
  },
  // mixins: [mixin, mixin2],
  beforeCreate() {
    this.sex = "男";
  
    console.log('beforeCreate',this)
  },
  created() {
    this.age = 18;
    console.log('created',this)
  },
  mounted() {
    this.sex = 'thomas'
    this.age = 20
    // this.name = 'hahhah'
    this.test_name= 'test'
    console.log(this)
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
  background-color: pink;
  .xix {
    color: red;
  }
}
</style>
