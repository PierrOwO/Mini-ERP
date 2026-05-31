<script setup>
defineProps({
    message: String,
    type: String
})
</script>

<template>
    <div
        class="px-4 py-2 rounded-lg shadow text-white"
        :class="{
            'bg-green-500': type === 'success',
            'bg-red-500': type === 'error',
            'bg-blue-500': type === 'info'
        }"
    >
        {{ message }}
    </div>
</template>
