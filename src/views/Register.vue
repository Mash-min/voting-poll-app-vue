<template>
  <Nav />
  <div class="row">
    <div class="col-md-4 offset-md-4">
      <ul class="list-group m-1">
        <form @submit.prevent="submitUser">
          <li class="list-group-item" style="text-align: center;">
            <h5>Register</h5>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Username:</small>
              <input 
                type="text" class="form-control" placeholder="Enter your username..." 
                v-model="newUser.username"
                :class="{ 'is-invalid' : userErrors.username }">
              <div class="invalid-feedback" v-if="userErrors.username">
                {{ userErrors.username[0] }}
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Email:</small>
              <input 
                type="email" class="form-control" placeholder="Enter your email address..." 
                v-model="newUser.email"
                :class="{ 'is-invalid' : userErrors.email }">
              <div class="invalid-feedback" v-if="userErrors.email">
                {{ userErrors.email[0] }}
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Password:</small>
              <input 
                type="password" class="form-control" placeholder="Enter your password..." 
                v-model="newUser.password"
                :class="{ 'is-invalid' : userErrors.password }">
              <div class="invalid-feedback" v-if="userErrors.password">
                {{ userErrors.password[0] }}
              </div>
            </div>
          </li>
          <li class="list-group-item">
            <div class="m-1">
              <small class="text-muted">Password confirmation:</small>
              <input 
                type="password" class="form-control" placeholder="Re-enter your password..." 
                v-model="newUser.password_confirmation">
            </div>
          </li>
          <li class="list-group-item" style="text-align: center;">
            <div class="d-grid">
              <button class="btn btn-sm btn-outline-dark" type="submit">
                Register
              </button>
            </div>
          </li>
        </form>
      </ul>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Register',
  components: {
    Nav
  },
  computed: {
    ...mapGetters([
      'newUser',
      'userErrors'
      ]),
  },
  methods: {
    ...mapActions(['registerUser']),

    submitUser() {
      this.registerUser(this.newUser)
    }
  },
  created() {
    [this.userErrors.username, this.userErrors.email, this.userErrors.password] = '' ,
    [this.newUser.username, this.newUser.email, this.newUser.password, this.newUser.password_confirmation] = ''
  }
}
</script>