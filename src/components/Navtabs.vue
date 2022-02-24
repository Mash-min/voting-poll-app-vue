<template>
  <ul class="nav nav-tabs m-1 justify-content-center">
    <li class="nav-item">
      <router-link to="/polls" class="nav-link" :class="{ 'active' : tab == 'polls' }">
        <i class="fa fa-list"></i> Polls
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/create-poll" class="nav-link" :class="{ 'active' : tab == 'create-poll' }">
        <i class="fa fa-plus"></i> Create poll
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/profile" class="nav-link" :class="{ 'active' : tab == 'profile' }">
        <i class="fa fa-user-o"></i> Profile
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Navtabs',
  props: ['tab']
}
</script>