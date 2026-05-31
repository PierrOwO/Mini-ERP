<script setup>
import { useAuthStore } from '../../stores/authStore'

const auth = useAuthStore()
</script>

<template>
    <aside class="w-64 fixed left-0 top-0 h-screen bg-white border-r">

        <div class="p-5 border-b">
            <h1 class="text-xl font-bold text-blue-600">
                Mini ERP
            </h1>
        </div>

        <nav class="p-4 flex flex-col gap-2 text-sm">

            <router-link
                to="/"
                class="px-3 py-2 rounded-lg hover:bg-gray-100"
            >
                Dashboard
            </router-link>

            <router-link
                to="/products"
                class="px-3 py-2 rounded-lg hover:bg-gray-100"
            >
                Products
            </router-link>

            <router-link
                v-if="auth.isAdmin"
                to="/users"
                class="px-3 py-2 rounded-lg hover:bg-gray-100"
            >
                Users
            </router-link>

        </nav>

    </aside>
</template>
