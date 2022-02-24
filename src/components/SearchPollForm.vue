<template>
  <div class="m-1">
    <form @submit.prevent="submitSearch">
      <div class="d-flex">
        <button 
          class="btn btn-outline-secondary" 
          type="button"
          @click="fetchPolls(url)">
          <i class="fa fa-refresh"></i>
        </button>
        <input 
          type="text" 
          class="form-control ms-1" 
          placeholder="Search poll..."
          v-model="search">
        <button 
          class="btn btn-outline-secondary ms-1" 
          type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SearchPollForm',
  data() {
    return {
      search: '',
      url: 'api/polls'
    }
  },
  methods: {
    ...mapActions([
      'fetchPolls',
      'searchPoll'
    ]),

    submitSearch() {
      this.searchPoll(this.search)
    }
  }
}
</script>