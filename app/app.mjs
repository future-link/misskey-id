import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// root components
import head from './head.vue'
import app from './app.vue'

// page components
import index from './pages/index.vue'
import notfound from './pages/notfound.vue'

const routes = [
  {
    path: '/',
    component: index
  },
  {
    path: '/(.*)',
    component: notfound
  }
]
const router = new VueRouter({
  mode: 'history',
  routes
})

// https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication
const bus = new Vue()

new Vue({
  el: '#head',
  render: h => h(head, {
    props: {
      bus
    }
  })
})

new Vue({
  el: "#app",
  render: h => h(
    app,
    {
      props: {
        bus
      }
    }
  ),
  router
})
