import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    msg:'hello vuejs'
  },
  getters:{
    reverseMsg(state){
      return state.msg.split('').reverse().join('')
    },
    countAdd:state=>state.count+1
  },
  mutations: {
    increate(state,payload){
      state.count+=payload
    },
    add(state){
      state.count+=10
    }
  },
  actions: {
    increateAsync(context){
      setTimeout(()=>{
        context.commit('add')
      },2000)
    }
  },
  modules: {
  }
})
