import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout'



const routes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect')
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: 'index',
    children: [{
      path: 'index',
      component: () => import('@/views/index'),
      name: '首页',
      meta: { title: '首页', icon: 'dashboard', noCache: true, affix: true }
    }],
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
