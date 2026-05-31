import { createRouter, createWebHistory } from 'vue-router'

import DashboardPage from '../pages/dashboard/DashboardPage.vue'
import ProductsPage from '../pages/products/ProductsPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'

import { useAuthStore } from '../stores/authStore'

const routes = [
    {
        path: '/',
        name: 'dashboard',
        component: DashboardPage,
        meta: { requiresAuth: true }
    },
    {
        path: '/products',
        name: 'products',
        component: ProductsPage,
        meta: {
            requiresAuth: true,
            role: 'admin'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to) => {
    const auth = useAuthStore()

    if (auth.user === null) {
        try {
            await auth.fetchUser()
        } catch {
            auth.user = null
        }
    }

    if (to.meta.role) {
        const hasRole = auth.user?.roles?.includes(to.meta.role)
        if (!hasRole) return '/'
    }

    if (to.meta.requiresAuth && !auth.user) return '/login'

    if (to.name === 'login' && auth.user) return '/'
})

export default router
