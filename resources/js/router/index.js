import { createRouter, createWebHistory } from 'vue-router'

import DashboardPage from '../pages/dashboard/DashboardPage.vue'
import ProductsPage from '../pages/products/ProductsPage.vue'
import LoginPage from '../pages/auth/LoginPage.vue'

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
        meta: { requiresAuth: true }
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

    // jeśli jeszcze nie sprawdziliśmy usera → pobierz
    if (auth.user === null) {
        try {
            await auth.fetchUser()
        } catch {
            auth.user = null
        }
    }

    // jeśli route wymaga auth i nie ma usera → login
    if (to.meta.requiresAuth && !auth.user) {
        return '/login'
    }

    // jeśli user zalogowany i próbuje wejść na login → dashboard
    if (to.name === 'login' && auth.user) {
        return '/'
    }
})

export default router
