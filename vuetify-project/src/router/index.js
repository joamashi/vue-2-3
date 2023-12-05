// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: '/api',
        name: 'Api',
        component: () => import('@/views/Api.vue'),
      },
      
      {
        path: '/components',
        name: '',
        component: () => import('@/views/Components.vue'),
      },

      {
        path: '/ScrollBehavior',
        name: '',
        component: () => import('@/views/ScrollBehavior.vue'),
      },

      {
        path: '/About',
        name: '',
        component: () => import('@/views/About.vue'),
      },

      {
        path: '/Page',
        name: '',
        component: () => import('@/views/Page.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router