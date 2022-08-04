import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/projetos',
    name: 'portfolio',
    component: () => import('../views/Portfolio.vue')
  },
  {
    path: '/artigos',
    name: 'artigos',
    component: () => import('../components/Texto.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/Contato.vue')
  },
  {
    path: '/player/:project',
    name: 'player',
    component: () => import('../views/PlayerProject.vue')
  }
]

const   router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
