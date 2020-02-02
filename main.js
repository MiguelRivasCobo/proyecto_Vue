import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueRouter from 'vue-router'
import nota from './components/nota.vue'
import tokio from './components/tokio.vue'
import header from './components/header.vue'
import pie from './components/pie.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const misRutas = [
  { path: "/inicio", component: tokio},
  { path: "/Recordatorio", component: nota},
  { path: "*", component: tokio},
]

const router = new VueRouter({'routes': misRutas})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
