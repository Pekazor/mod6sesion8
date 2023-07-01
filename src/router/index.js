import Vue from 'vue'
import VueRouter from 'vue-router'
/*import HomeView from '../views/HomeView.vue'
import Personajes from '@/views/Personajes.vue'
import Personaje from '@/views/Personaje.vue'
import Contacto from '@/views/Contacto.vue'*/
import Comodin from '@/views/Comodin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/personajes',
    component: () => import(/* webpackChunkName: "personajes" */ '@/views/Personajes.vue'),
    alias:['/people','/characters'],
  },
  {
    path: '/personaje/:id',
    component: () => import(/* webpackChunkName: "Personaje" */ '../views/Personaje.vue'),
    props: true
  },
  {
    path:'/contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue'),
  },
  {
    path:'*',
    component: Comodin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
