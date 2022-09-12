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
    search:''
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
    setSearch(state, search){
      state.search=search
    }

  },
  actions: {
    setToken({commit}, token){
      commit('setToken', token)
    },
    setUser({commit}, user){
      commit('setUser', user)
    },
    setData({commit}, search){
      commit('setSearch', search)
    }
    
  },
  modules: {
  }
})
