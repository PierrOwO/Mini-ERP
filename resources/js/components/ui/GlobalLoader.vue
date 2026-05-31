<script setup>
import { useLoadingStore } from '../../stores/loadingStore'

const loading = useLoadingStore()
</script>

<template>
    <div
        v-if="loading.loading"
        class="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
    >
        <div class="bg-white px-6 py-4 rounded-lg shadow">
            Loading...
        </div>
    </div>
</template>
