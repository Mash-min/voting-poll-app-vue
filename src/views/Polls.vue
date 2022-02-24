<template>
  <Nav />
  <div class="col-md-6 offset-md-3">
    <Navtabs v-bind:tab="'polls'"/>
    <SearchPollForm />
    <PollItem />
    <Pagination />
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Navtabs from '@/components/Navtabs'
import PollItem from '@/components/PollItem'
import SearchPollForm from '@/components/SearchPollForm'
import Pagination from '@/components/Pagination'
import { mapActions } from 'vuex'

export default {
  name: 'Polls',
  components: {
    Nav,
    Navtabs,
    PollItem,
    SearchPollForm,
    Pagination
  },
  data() {
    return {
      url: '/api/polls'
    }
  },
  methods: {
    ...mapActions(['fetchPolls'])
  },
  created() {
    this.fetchPolls(this.url)
  }
}
</script>