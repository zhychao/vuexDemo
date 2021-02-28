<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ $store.state.msg }}</h1>
    <h1>{{ $store.state.count }}</h1>
     <!-- <h1>{{ msg }}</h1> -->
    <!-- <h1>{{ count }}</h1> -->
    <h1>{{ countMsg }}</h1>
    <h1>{{ messga }}</h1>
    <h1>{{  $store.getters.reverseMsg }}</h1>
    <h1>{{  $store.getters.countAdd }}</h1>
     <el-button type="primary" @click="test">主要按钮</el-button>
     <el-button type="primary" @click="increate(3)">主要按钮</el-button>
     <el-button type="primary" @click="increateAsync">主要按钮increateAsync</el-button>
  </div>
</template>

<script>
import{mapActions, mapMutations, mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed:{
    // ...mapState(['count','msg'])
    ...mapState({countMsg:'count',messga:'msg'})
  },
  methods:{
    ...mapMutations(['increate']),
    test(){
      this.$store.commit('add')
    },
    // increateAsync(){
    //   this.$store.dispatch('increateAsync')
    // },
    ...mapActions(['increateAsync'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
