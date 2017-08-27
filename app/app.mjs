import Vue from 'vue'
import head from './head.vue'
import app from './app.vue'

// components
import hogeComponent from './components/hoge.vue'
import notfoundComponent from './components/notfound.vue'

// select components by route
const routes = {
  '/': {
    title: 'hoge',
    component: hogeComponent
  },
  'notfound': {
    title: 'notfound',
    component: notfoundComponent
  }
}
const route = routes[location.pathname || 'notfound']
Vue.component('router-view', route.component)

// https://vuejs.org/v2/guide/components.html#Non-Parent-Child-Communication
const bus = new Vue()

new Vue({
  el: '#head',
  render: h => h(head, {
    props: {
      title: route.title,
      bus
    }
  })
})

new Vue({
  el: '#app',
  render: h => h(app, {
    props: {
      bus
    }
  })
})
