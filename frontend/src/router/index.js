import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/docs',
		name: 'docs',
		component: () => import('../views/DocView.vue')
  },
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
  },
	{
		path: '/contact',
		name: 'contact',
		component: () => import('../views/ContactView.vue')
  },
	{
		path: '/admin-register',
		name: 'register',
		component: () => import('../views/Register.vue')
  },
	{
		path: '/admin-login',
		name: 'login',
		component: () => import('../views/Login.vue')
  },
	{
		path: '/admin-profile',
		name: 'edit-profile',
		component: () => import('../views/EditProfView.vue')
  },
	{
		path: '/admin-dashboard',
		name: 'dasboard',
		component: () => import('../views/AdminDashView.vue')
  },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})
export default router