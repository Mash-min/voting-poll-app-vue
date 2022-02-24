<template>
  <Nav />
  <div class="col-md-4 offset-md-4">
    <Navtabs v-bind:tab="'create-poll'"/>

    <div class="m-1 mb-3">
      <div class="d-grid mb-3">
        <small class="text-muted">Poll title:</small>
        <input 
          type="text" class="form-control" placeholder="Enter your poll title..." 
          v-model="newPoll.title">
      </div>
      <div class="mb-3">
        <small class="text-muted">Poll items:</small>
        <form 
          @submit.prevent="addItem">
          <div class="d-flex">
            <input 
              type="text" class="form-control" placeholder="Add items to your poll..." 
              v-model="pollInput">
            <button class="btn btn-outline-secondary ms-1"><i class="fa fa-plus"></i></button>
          </div>
        </form>
      </div>
      <div class="d-grid">
        <button 
          class="btn btn-sm btn-outline-secondary" 
          @click="submitPoll">
          Save Poll
        </button>
      </div>
    </div>

    <div class="m-1">
      <ul class="list-group">
        <li 
          class="list-group-item"
          v-for="(item, index) in newPoll.items"
          :key="item">
          <div class="d-flex justify-content-between">
            <span class="text-muted">
              <i class="fa fa-chevron-right"></i> {{ item }}
            </span>
            <button 
              type="button" class="btn-close" aria-label="Close" 
              @click="removeItem(index)">
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import Navtabs from '@/components/Navtabs'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CreatePoll',
  components: {
    Nav,
    Navtabs
  },
  data() {
    return {
      pollInput: ''
    }
  },
  computed: {
    ...mapGetters(['newPoll'])
  },
  methods: {
    ...mapActions(['addPoll']),

    addItem() {
      if(this.pollInput != '') {
        this.newPoll.items.push(this.pollInput)
        this.pollInput = ''
      }
    },

    removeItem(index) {
      this.newPoll.items.splice(index, 1)
    },

    submitPoll() {
      this.addPoll(this.newPoll)
    }
  }
}
</script>