import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index'
import Register from '@/views/Register'
import Polls from '@/views/Polls'
import CreatePoll from '@/views/CreatePoll'
import Profile from '@/views/Profile'
import NotFound from '@/views/NotFound'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      guest: true
    }
  },
  {
    path: '/polls',
    name: 'Polls',
    component: Polls, 
    meta: {
      auth: true
    }
  },
  {
    path: '/create-poll',
    name: 'CreatePoll',
    component: CreatePoll, 
    meta: {
      auth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile, 
    meta: {
      auth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.guest == true)) {
    if(localStorage.getItem('token') != null) {
      router.push({ path: '/polls' })
    }
  }

  if(to.matched.some(record => record.meta.auth == true)) {
    store.dispatch(...['checkToken'])
    if(localStorage.getItem('token') == null) {
      router.push({ path: '/' })
    }
  }
  
  next()
})

export default router
