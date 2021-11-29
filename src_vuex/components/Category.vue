<template>
  <div class="category">
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和*10为：{{bigSum}}</h1>
    <h1>总人数为：{{personList.length}}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementWait(n)">等会加</button>
    <button @click="incrementOdd(n)">偶数加</button>
  </div>
</template>
<script>
import { mapState,mapGetters ,mapMutations,mapActions} from "vuex";
export default {
  name: "Category",
  data() {
    return {
      n: 1,
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {
    console.log("mounted", this);
  },
  computed: {
    // ...mapState({sum:'sum'}),
    ...mapState('countAbout',['sum']),
    ...mapState('personAbout',['personList']),
    ...mapGetters('countAbout',['bigSum'])
  },
  methods: {
    // increment() {
    //   // this.$store.dispatch('increment',this.n)
    //   this.$store.commit("INCREMENT", this.n);
    // },
    // decrement() {
    //   this.$store.commit("DECREMENT", this.n);
    // },
    ...mapMutations('countAbout',{increment:'INCREMENT',decrement:'DECREMENT'}),
    // incrementWait() {
    //   this.$store.dispatch("incrementWait", this.n);
    // },
    // incrementOdd() {
    //   this.$store.dispatch("incrementOdd", this.n);
    // },
    ...mapActions('countAbout',['incrementWait','incrementOdd'])
  },
};
</script>
<style scoped>
.category {
}
</style>