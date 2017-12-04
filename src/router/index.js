import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Test from '@/pages/Test'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',
      name: 'Root',
      component: Layout,
      redirect: '/index',
      meta: { requiresAuth: true },
      children: [
        {
          path: 'index',
          component: Index
        }
      ]
    },
    { path: '/test', name: 'Test', component: Test, meta: { requiresAuth: true } },
    // { path: '/index', name: 'Index', component: Layout, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: Login, meta: { requiresAuth: false } }
  ]
})
