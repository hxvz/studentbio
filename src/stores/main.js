import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		currentUser: null
	},
	actions: {

	},
	mutations: {
		SET_CURRENT_USER: function (state, userid) {
			state.currentUser = userid;
		}
	},
	getters: {
		getCurrentUser: function(state) {
			return state.currentUser;
		}
	}
});

export default store;