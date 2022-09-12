import Vue from 'vue'
import VueRouter from 'vue-router'
import DocView from '../views/DocView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'
import EditProfView from '../views/EditProfView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/docs',
    name: 'docs',
    component: DocView
  },
  {
    path: '*',
    redirect: '/docs'
  },
  {
    path: '/about',
    name: 'about',
    component:AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component:ContactView
  },
  {
    path: '/admin-register',
    name: 'register',
    component:RegisterView
  },
  {
    path: '/admin-login',
    name: 'login',
    component:LoginView
  },
  {
    path: '/admin-profile',
    name: 'edit-profile',
    component:EditProfView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
