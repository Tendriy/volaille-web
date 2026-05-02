import { createRouter, createWebHistory } from 'vue-router'

// Import des composants
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import Lots from '../views/Lots.vue'
import LotDetail from '../views/LotDetail.vue'
import Stock from '../views/Stock.vue'
import Vaccins from '../views/Vaccins.vue'
import Ventes from '../views/Ventes.vue'
import AuthLayout from '@/components/AuthLayout.vue'

// Définition des routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/app', 
    component: AuthLayout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: 'lots',
        name: 'Lots',
        component: Lots,
        meta: { requiresAuth: true }
      },
      {
        path: 'lots/:id',
        name: 'LotDetail',
        component: LotDetail,
        meta: { requiresAuth: true }
      },
      {
        path: 'stock',
        name: 'Stock',
        component: Stock,
        meta: { requiresAuth: true }
      },
      {
        path: 'vaccins',
        name: 'Vaccins',
        component: Vaccins,
        meta: { requiresAuth: true }
      },
      {
        path: 'ventes',
        name: 'Ventes',
        component: Ventes,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/' 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const token = localStorage.getItem('token')
  
  if (requiresAuth && !token) {
    next({ 
      name: 'Login',
      query: { redirect: to.fullPath } 
    })
  } 
  else if ((to.name === 'Login' || to.name === 'Register') && token) {
    next({ name: 'Dashboard' }) 
  }
  else {
    next()
  }
})

export default router