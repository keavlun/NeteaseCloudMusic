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
    code:null
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
    register(state,res){
      if(res.code == 502 || res.code == 200){
        state.code = res.code
      }else if(res.code == undefined){
        state.code = 101
      }
    }
  },
  actions: {
    Login({commit}, user){
      return new Promise((resolve,reject) => {
        commit('auth_request')
        phoneLogin(user.phone, user.password)
        .then(res =>{
          console.log(res);
          commit('auth_success')
          resolve(res)
          commit('register',res)
          

        })
        .catch(err => {
          commit('auth_error')
          commit('register',err)

        })
      })
    }
  },
  modules: {}
})