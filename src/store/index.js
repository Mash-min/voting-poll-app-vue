import { createStore } from "vuex"
import polls from '@/store/modules/polls'
import users from '@/store/modules/users'
import votes from '@/store/modules/votes'

const store = createStore({
  modules: {
    polls,
    users,
    votes
  }
})

export default store