import axios from "axios"
import router from '@/router'
import Swal from "sweetalert2"

const state = {
  user: {
    username: '',
    email: ''
  },
  newUser: {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  },
  userErrors: [],
  authenticated: false
}

const getters = {
  user: (state) => state.user,
  newUser: (state) => state.newUser,
  userErrors: (state) => state.userErrors,
  authenticated: (state) => state.authenticated
}

const actions = {
  authenticateUser({ commit }) {
    if(localStorage.getItem('token') != null) {
      commit('setAuthenticatedUser', true)
    }
  },

  async registerUser({ commit }, payload) {
    commit('setUserErrors', [])
    try {
      const response = await axios.post('api/users/register', payload)
      localStorage.setItem('token', response.data.token)
      window.location.href = '/polls'
    } catch (e) {
      commit('setUserErrors', e.response.data.errors)
    }
  },

  async loginUser(_, payload) {
    try {
      const response = await axios.post('api/users/login', payload)
      localStorage.setItem('token', response.data.token)
      window.location.href = "/polls"
    } catch (e) {
      Swal.fire(e.response.data.message)
    }
  },

  async logoutUser() {
    try {
      await axios.post('api/users/logout')
      localStorage.removeItem('token')
      window.location.href = "/"
    } catch (e) {
      console.error(e.response)
    }
  },

  async getUser({ commit }) {
    try {
      const response = await axios.get('api/users')
      commit('setUser', response.data.user)
    } catch (e) {
      console.error(e.response)
    }
  },

  async checkToken({ commit }) {
    try {
      await axios.get('api/users')
    } catch (e) {
      localStorage.removeItem('token')
      router.push({ path: '/' })
      commit('setAuthenticatedUser', false)
      console.clear()
    }
  }
}

const mutations = {
  setAuthenticatedUser: (state, payload) => state.authenticated = payload,
  setUser: (state, user) => (state.user = user),
  setUserErrors: (state, errors) => (state.userErrors = errors)
}

export default {
  state,
  getters,
  actions,
  mutations
}