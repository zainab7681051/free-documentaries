import Vue from 'vue'
import VueRouter from 'vue-router'
import DocView from '../views/DocView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import RegisterView from '../views/Register.vue'
import LoginView from '../views/Login.vue'
import EditProfView from '../views/EditProfView.vue'
import DownloadView from '../views/DownloadView.vue'
import AdminDashView from '../views/AdminDashView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/docs',
    name: 'docs',
    component: DocView
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
    path: '/download/:docId',
    name: 'download',
    component:DownloadView
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
  },
  {
    path: '/admin-dashboard',
    name: 'dasboard',
    component:AdminDashView
  },
  {
    path:'*',
    redirect:'docs'
  }
]

const router = new VueRouter({
  routes
})

export default router
