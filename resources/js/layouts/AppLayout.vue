<script setup>
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const auth = useAuthStore()
const logout = async () => {
    await auth.logout()
    router.push('/login')
}
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <aside class="w-64 fixed left-0 top-0 h-screen bg-white border-r">
            Sidebar
            <router-link  style="display: block;" to="/products">Products</router-link>

            <router-link to="/login">  Auth.login</router-link>
        </aside>
        <button
                @click="logout"
                class="bg-blue-500 text-white w-full p-2"
            >
            logout
            </button>

        <main class="ml-64 p-6">
            <slot />
        </main>
    </div>
</template>
