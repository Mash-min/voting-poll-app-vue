import axios from "axios"

const state = {
  poll: {
    title: ''
  },
  polls: [],
  newPoll: {
    title: '',
    items: []
  },
  pollErrors: [],
  pollLinks: []
}

const getters = {
  poll: (state) => state.poll,
  polls: (state) => state.polls,
  newPoll: (state) =>state.newPoll,
  pollErros: (state) => state.pollErrors,
  pollLinks: (state) => state.pollLinks
}

const actions = {
  async fetchPolls({ commit }, url) {
    try {
      const response = await axios.get(url)
      commit('setPolls', response.data.polls.data)
      commit('setPollLinks', response.data.polls.links)
      window.scrollTo(0, 0)
    } catch (e) {
      console.error(e)
    }
  },

  async addPoll({ commit }, payload) {
    try {
      const pollResponse = await axios.post('api/polls', payload)
      await axios.post('api/items', {
        poll_id: pollResponse.data.poll.id,
        items: payload.items
      })
      commit('setNewPoll')
    } catch (e) {
      console.error(e.response)
    }
  },

  async searchPoll({ commit }, payload) {
    try {
      const response = await axios.get(`api/polls/search/${payload}`)
      commit('setPolls', response.data.polls.data)
      commit('setPollLinks', response.data.polls.links)
    } catch (e) {
      console.error(e.response)
    }
  }
}

const mutations = {
  setPolls: (state, polls) => state.polls = polls,
  setPollLinks: (state, links) => (state.pollLinks = links),
  setPoll: (state, poll) => (state.polls[state.polls.findIndex(data => data.id == poll.id)] = poll),
  setNewPoll: (state) => {
    state.newPoll.title = '',
    state.newPoll.items = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}