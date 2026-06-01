<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/authStore'
import { useRouter } from 'vue-router'
import BaseButton from '../../components/base/BaseButton.vue'
import BaseInput from '../../components/base/BaseInput.vue'
import FloatingLabelInput from '../../components/input/FloatingLabelInput.vue'

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

        <div class="w-96 bg-white p-6 rounded box-shadow">

            <h1 class="text-2xl font-bold mb-4">Login</h1>

            <FloatingLabelInput
                v-model="email"
                placeholder="Email"
                class="border w-full p-2 mb-2"
                labelText="Email"
                autofocus
            />

            <FloatingLabelInput
                v-model="password"
                type="password"
                placeholder="Password"
                class="border w-full p-2 mb-4"
                labelText="Password"
            />

            <BaseButton
                @click="submit"
                class="bg-blue-500 text-white w-full p-2"
            >
                Login
            </BaseButton>

        </div>

    </div>
</template>
<style lang="css" scoped>
    .box-shadow{ box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;}

</style>
