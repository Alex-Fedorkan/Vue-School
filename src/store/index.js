import Vue from 'vue';
import Vuex from 'vuex';

import { loginUser, registerUser } from '../services/auth.service';

Vue.use(Vuex);

const initialState = {
  user: undefined,
  token: '',
};

const store = new Vuex.Store({
  state: { ...initialState },
  mutations: {
    setUserData(state, userData) {
      state.user = userData;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, payload) {
      const { data } = await loginUser(payload);

      commit('setUserData', data.user);
      commit('setToken', data.token);
    },
    async registration({ commit }, payload) {
      const { data } = await registerUser(payload);

      commit('setUserData', data.user);
      commit('setToken', data.token);
    },
  },
});

export default store;
