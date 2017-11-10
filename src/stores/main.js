import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		currentUser: null
	},
	actions: {

	},
	plugins: [
    createPersistedState({
  	storage: {
      getItem: function(key) { return Cookies.get(key); },
      setItem: function (key, value){
      	Cookies.set(key, value, { expires: 3 });
      },
      removeItem: function(key) { Cookies.remove(key); }
    }
  })
  ],
	mutations: {
		SET_CURRENT_USER: function (state, payload) {
			state.currentUser = payload.currentUser;
		},
		REMOVE_CURRENT_USER: function(state, payload) {
			state.currentUser = null;
		}
	}
});

export default store;