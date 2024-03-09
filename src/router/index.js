/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import dashboard from '../pages/dashboard'

import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes: [
    {
      path:'/dashboard',
      name:'Dashboard',
      component: dashboard
    },

    {
      path:'/profiling',
      name:'Dashboard',
      component: dashboard
    },
  ]
})

export default router
