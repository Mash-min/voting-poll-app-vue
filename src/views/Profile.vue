<template>
  <Nav />
  <div class="col-md-4 offset-md-4">
    <Navtabs v-bind:tab="'profile'"/>
    <div class="m-1">
      <ul class="list-group">
        <li class="list-group-item d-flex justify-content-between">
          <small class="text-muted">Username: </small>
          <span class="user-data">{{ user.username }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <small class="text-muted">Email: </small>
          <span class="user-data">{{ user.email }}</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <small class="text-muted">Password: </small>
          <button class="btn btn-sm btn-outline-secondary"><i class="fa fa-lock"></i> Reset password</button>
        </li>
        <li class="list-group-item">
          <div class="d-grid">
            <button class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#updateAccountModal">
              Update account
            </button>
          </div>
        </li>
        <li class="list-group-item">
          <button class="btn btn-sm btn-outline-dark disabled">Polls: 0</button>
        </li>
      </ul>
    </div>
  </div>
  <UpdateAccountModal />
</template>

<script>
import Nav from '@/components/Nav'
import Navtabs from '@/components/Navtabs'
import UpdateAccountModal from '@/components/UpdateAccountModal'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Profile',
  components: {
    Nav,
    Navtabs,
    UpdateAccountModal
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['getUser'])
  },
  created() {
    this.getUser()
  }
}
</script>