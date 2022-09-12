import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  strict:true,
  plugins: [
    createPersistedState()
  ],
  state: {
    token:null,
    user:null,
    isUserLoggedIn:false,
    todo:{list:[]},//object in array==>object{array:[1:{object},2:{object}]}
    id:1
  },
  getters: {
  },
  mutations: {
    setToken (state, token){
      state.token=token
      state.isUserLoggedIn = !!(token)
    },
    setUser(state, user){
      state.user=user
    },
    setData(state, data){
      state.todo.list.push(data)
      state.todo.list.sort((a,b)=>b.id-a.id)
    },
    DeleteAll(state){
      state.todo={list:[]}

    },
    Check(state,todo){
      state.todo.list.forEach( function(element, index) {
        if(element.id==todo.id){
          element.toDoDone=!element.toDoDone
        }
      });
    },
    DeleteOne(state,todo){
      state.todo.list.forEach( function(element, index) {
        if(element.id==todo.id){
         state.todo.list.splice(index,1)//at todo.id index delete one 
        }
      });
    },
    Increment(state){
      state.id++
    }

  },
  actions: {
    setToken({commit}, token){
      commit('setToken', token)
    },
    setUser({commit}, user){
      commit('setUser', user)
    },
    setData({commit}, data){
      commit('setData', data)
    },
    Check({commit}, todo){
      commit('Check', todo)
    },
    DeleteOne({commit},todo){
      commit('DeleteOne',todo)
    },
    DeleteAll({commit}){
      commit('DeleteAll')
    },
    Increment({commit}){
      commit('Increment')
    },
    

  },
  modules: {
  }
})
