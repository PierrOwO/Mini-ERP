<script setup>
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const logout = async () => {
    await auth.logout()
    router.push('/login')
}
</script>

<template>
    <header class="h-16 bg-white border-b flex items-center justify-between px-6">

        <div class="text-gray-600 font-medium">
            ERP System
        </div>

        <div class="flex items-center gap-4">

            <span class="text-sm text-gray-500">
                {{ auth.user?.name }}
            </span>

            <button
                @click="logout"
                class="text-sm text-red-500 hover:text-red-600"
            >
                Logout
            </button>

        </div>

    </header>
</template>
