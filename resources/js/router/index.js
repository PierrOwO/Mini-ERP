import { createRouter, createWebHistory } from 'vue-router'

import { useAuthStore } from '../stores/authStore'

import DashboardPage from '../pages/dashboard/DashboardPage.vue'
import ProductsPage from '../pages/products/ProductsPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'
import RegisterPage from '../pages/auth/RegisterPage.vue'
import UsersPage from '../pages/users/UsersPage.vue'
import OrdersPage from '../pages/orders/OrdersPage.vue'
import OrderShowItemsPage from '../pages/orders/OrderShowItemsPage.vue'

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
    {
        path: '/users',
        name: 'users',
        component: UsersPage,
        meta: {
            requiresAuth: true,
            role: 'admin'
        }
    },
    {
        path: '/orders',
        name: 'orders',
        component: OrdersPage,
        meta: {
            requiresAuth: true,
            role: 'admin'
        }
    },
    {
        path: '/orders/:id',
        name: 'orders.show',
        component: OrderShowItemsPage,
    }
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
