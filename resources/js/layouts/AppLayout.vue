<script setup>
import Sidebar from '../components/layout/Sidebar.vue'
import Topbar from '../components/layout/Topbar.vue'
</script>

<template>
    <div class="min-h-screen bg-gray-50 flex">

        <Sidebar />

        <div class="flex-1 ml-64 flex flex-col">

            <Topbar />

            <main class="p-6">
                <slot />
            </main>

        </div>

    </div>
</template>
