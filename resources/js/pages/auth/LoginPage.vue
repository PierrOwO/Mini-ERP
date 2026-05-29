<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')

const submit = async () => {
    await auth.login(email.value, password.value)
    router.push('/')
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">

        <div class="w-96 bg-white p-6 border rounded">

            <h1 class="text-2xl font-bold mb-4">Login</h1>

            <input
                v-model="email"
                placeholder="Email"
                class="border w-full p-2 mb-2"
            />

            <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="border w-full p-2 mb-4"
            />

            <button
                @click="submit"
                class="bg-blue-500 text-white w-full p-2"
            >
                Login
            </button>

        </div>

    </div>
</template>
