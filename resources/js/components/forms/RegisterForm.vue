<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/authStore'

import FloatingLabelInput from '../../components/input/FloatingLabelInput.vue'
import BaseButton from '../../components/base/BaseButton.vue'

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
    <form @submit.prevent="submit">

        <FloatingLabelInput
            v-model="name"
            labelText="Name"
            class="border p-2 w-full mb-2"
            autofocus
        />

        <FloatingLabelInput
            v-model="email"
            labelText="Email"
            class="border p-2 w-full mb-2"
        />

        <FloatingLabelInput
            v-model="password"
            type="password"
            labelText="Password"
            class="border p-2 w-full mb-4"
        />

        <BaseButton
            type="submit"
            class="bg-blue-500 text-white w-full p-2"
        >
            Register
        </BaseButton>

    </form>
</template>
