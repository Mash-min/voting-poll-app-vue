import axios from "axios"

const state = {
  vote: {}
}

const getters = {}

const actions = {
  async addVote({ commit }, payload) {
    try {
      const response = await axios.post('api/votes', payload)
      commit('setPoll', response.data.poll)
    } catch (e) {
      console.error(e.response)
    }
  }
}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}