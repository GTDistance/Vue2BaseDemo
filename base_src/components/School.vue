<template>
  <div @click="showName">{{name}}</div>
</template>
<script>
// import {mixin} from '../mixin'
export default {
  name:'School',
  data() {
    return {
      name:'School'
    };
  },
  // mixins:[mixin]
};
</script>
<style scoped>
</style>