<script setup>
import LoginForm from '@/components/forms/LoginForm.vue'
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="w-96 bg-white p-6 rounded box-shadow">
            <h1 class="text-2xl font-bold mb-4">Login</h1>

            <LoginForm />

        </div>
    </div>
</template>

<style scoped>
.box-shadow {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
