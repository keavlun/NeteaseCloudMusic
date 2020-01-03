import Vue from 'vue'
import Vuex from 'vuex'

import { phoneLogin, loginStatu} from '../network/login';
import { resolve, reject } from 'q';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    // token: localStorage.getItem('token') || '',
    // user: {}

  },
  mutations: {
    auth_request(state) {
      state.status = 'loading';
    },
    auth_success(state) {
      state.status = 'success';
    },
    auth_error(state) {
      state.status = 'error';
    },
    logout(state) {
      state.status = '';
      state.token = '';
    },
  },
  actions: {
    Login({commit}, user){
      return new Promise((resolve,reject) => {
        commit('auth_request')
        phoneLogin(user.phone, user.password)
        .then(res =>{
          console.log(res.token);
          commit('auth_success')
          resolve(res)
        })
        .catch(err => {
          commit('auth_error')
        })
      })
    }
  },
  modules: {}
})