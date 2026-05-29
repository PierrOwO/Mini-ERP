<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'

const auth = useAuthStore()
const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

const submit = async () => {

    await auth.register(
        name.value,
        email.value,
        password.value
    )

    router.push('/')
}
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">

        <div class="w-96 bg-white p-6 rounded border">

            <h1 class="text-2xl font-bold mb-4">
                Register
            </h1>

            <input
                v-model="name"
                placeholder="Name"
                class="border p-2 w-full mb-2"
            />

            <input
                v-model="email"
                placeholder="Email"
                class="border p-2 w-full mb-2"
            />

            <input
                v-model="password"
                type="password"
                placeholder="Password"
                class="border p-2 w-full mb-4"
            />

            <button
                @click="submit"
                class="bg-blue-500 text-white w-full p-2"
            >
                Register
            </button>

        </div>

    </div>
</template>
