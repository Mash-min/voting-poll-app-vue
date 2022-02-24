<template>
  <div class="m-1 mt-3">
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li 
            class="page-item"
            :class="{ 'active' : link.active == true, 'disabled' : link.url == null }"
            v-for="link in pollLinks"
            :key="link.id">
            <button 
              class="page-link"
              @click="fetchPolls(link.url)">
              <span v-if="link.label == 'Previous'"><i class="fa fa-chevron-left"></i></span>
              <span v-else-if="link.label == 'Next'"><i class="fa fa-chevron-right"></i></span>
              <span v-else>{{ link.label }}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Pagination',
  props: ['links'],
  computed: {
    ...mapGetters(['pollLinks'])
  },
  methods: {
    ...mapActions(['fetchPolls'])
  }
}
</script>