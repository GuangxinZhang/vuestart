// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { api } from './api'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import Layout from './components/Layout'
// import VCharts from 'v-charts'
import VeLine from 'v-charts/lib/line'
import '../static/css/app.css'
// import 'vuetify/dist/vuetify.min.css'
import('../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.prototype.api = api
Vue.config.productionTip = false

// 注册组件
Vue.component('app-layout', Layout)
Vue.component(VeLine.name, VeLine)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('STORAGE_TOKEN')

// 访问路由前判断token，没有token则跳转至登录页
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('STORAGE_TOKEN')) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.http.interceptors.push((request, next) => {
  let token = localStorage.getItem('STORAGE_TOKEN')
  if (!token || token === 'undefined') {
    Vue.http.headers.common['Authorization'] = null
    console.log(this)
    router.push({ path: '/login' })
  }
  request.headers.set('Authorization', 'Bearer ' + token)
  next(response => {
    return response
  })
})
