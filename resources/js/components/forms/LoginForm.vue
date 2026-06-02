<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'

import BaseButton from '../../components/base/BaseButton.vue'
import FloatingLabelInput from '../../components/input/FloatingLabelInput.vue'

const auth = useAuthStore()
const router = useRouter()

const email = ref('')
const password = ref('')


const submit = async () => {
    try {
        await auth.login(
            email.value,
            password.value
        )

        router.push('/')
    } catch {}
}
</script>

<template>
    <form @submit.prevent="submit">
        <FloatingLabelInput
            v-model="email"
            labelText="Email"
            class="border w-full p-2 mb-2"
            autofocus
        />

        <FloatingLabelInput
            v-model="password"
            type="password"
            labelText="Password"
            class="border w-full p-2 mb-4"
        />

        <BaseButton
            type="submit"
            class="bg-blue-500 text-white w-full p-2"
        >
            Login
        </BaseButton>
    </form>
</template>
