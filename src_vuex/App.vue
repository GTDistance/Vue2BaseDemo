<template>
  <div class="container">
    <Category  />
    <Person  />
  </div>
</template>

<script>
import Category from "./components/Category.vue";
import Person from "./components/Person.vue";
export default {
  name: "App",
  components: {
    Category,
    Person,
  },
  data(){
    return {
    }
  },
  methods:{
  }
};
</script>

<style lang="less">
.container{
}
</style>
