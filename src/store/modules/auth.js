import { loginUser, registerUser } from '../../services/auth.service';

const initialState = {
  user: undefined,
  token: '',
};

export default {
  namespaced: true,
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
    async registerUser({ commit }, payload) {
      const { data } = await registerUser(payload);

      commit('setUserData', data.user);
      commit('setToken', data.token);
    },
  },
};
