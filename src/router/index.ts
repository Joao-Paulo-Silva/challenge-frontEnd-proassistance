import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from '../views/RegisterView.vue'
import EmptyView from '@/views/EmptyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cadastro',
      component: RegisterView
    },
    {
      path: '/home',
      name: 'home',
      component: EmptyView
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: EmptyView
    },
    {
      path: '/home',
      name: 'home',
      component: EmptyView
    },
    {
      path: '/profile',
      name: 'profile',
      component: EmptyView
    },
    {
      path: '/reports',
      name: 'reports',
      component: EmptyView
    }
  ]
})

export default router
