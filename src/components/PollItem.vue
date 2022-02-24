<template>
  <div 
    class="p-1"
    v-for="(poll) in polls"
    :key="poll.slug">
    <div class="card">
      <div class="card-body">
        <span >
          <small class="fw-bolder">
            {{ poll.title }}
          </small>
        </span>
        <br>
        <small class="text-muted"><i class="fa fa-user-o"></i> Mashiyyat - {{ poll.created_at }}</small>
        <div class="list-group mt-3">
          <button 
            class="list-group-item list-group-item-action"
            v-for="(item) in poll.items"
            :key="item.slug"
            @click="addVote({ 
              item_id: item.id, 
              poll_id: poll.id })">
            <div class="d-flex justify-content-between">
              <span class="tex-muted">
                <i class="text-muted fa fa-chevron-right"></i> 
                {{ item.name }}
              </span>
              <small class="text-muted">
                votes: {{ item.votes.length }}
              </small>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'PollItem',
  computed: {
    ...mapGetters(['polls'])
  },
  methods: {
    ...mapActions(['addVote'])
  }
}
</script>