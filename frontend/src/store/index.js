import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	plugins: [
    createPersistedState()
  ],
	state: {
		token: null,
		user: null,
		isUserLoggedIn: false,
		gotDocs: false,
		allDocs: null,
		GenreDocs: {},
		gotGenreDocs: false
	},
	getters: {},
	mutations: {
		setToken(state, token) {
			state.token = token
			state.isUserLoggedIn = !!(token)
		},
		setUser(state, user) {
			state.user = user
		},
		setDocs(state, docs) {
			try {
				state.allDocs = docs
				state.gotDocs = !!(state.allDocs)
			} catch (e) {
				console.log('@/store/index/setDocs error', e)
			}

		},
		setGenreDocs(state, docs) {
			try {
				state.GenreDocs[docs.genre] = docs
				state.gotGenreDocs = !!(state.GenreDocs)
			} catch (e) {
				console.log('@/store/index/setGenreDocs error', e)
			}

		}
	},
	actions: {
		setToken({
			commit
		}, token) {
			commit('setToken', token)
		},
		setUser({
			commit
		}, user) {
			commit('setUser', user)
		},
		setDocs({
			commit
		}, docs) {
			commit('setDocs', docs)
		},
		setGenreDocs({
			commit
		}, docs) {
			commit('setGenreDocs', docs)
		}

	},
	modules: {}
})