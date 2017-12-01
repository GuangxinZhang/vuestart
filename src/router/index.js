import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Root', component: Index, meta: { requiresAuth: true } },
    { path: '/index', name: 'Index', component: Index, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: Login, meta: { requiresAuth: false } }
  ]
})
