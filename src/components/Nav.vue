<template>
  <nav class="navbar navbar-dark bg-dark mb-5">
    <div class="container-fluid container d-flex justify-content-between">
      <router-link to="/" class="navbar-brand">Voting Poll App</router-link>
      <div class="d-flex">
        <router-link to="/register" class="btn btn-sm btn-primary ms-1" v-if="!authenticated">
          Register <i class="fa fa-sign-in"></i>
        </router-link>
        <router-link to="/" class="btn btn-sm btn-primary ms-1" type="button" v-if="!authenticated">
          Login
        </router-link>
        <button 
          class="btn btn-sm btn-danger ms-1" 
          type="button" 
          v-if="authenticated"
          @click="logoutUser">
          Logout <i class="fa fa-sign-out"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Nav',
  computed: {
    ...mapGetters(['authenticated'])
  },
  methods: {
    ...mapActions([
      'authenticateUser',
      'logoutUser'
      ])
  },
  created() {
    this.authenticateUser()
  }
}
</script>