import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Login = () => import('./components/login.vue')

const routes = [{
    path: '',
    redirect: "/login"
  },
  {
    path: '/login',
    component: Login
  },

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router