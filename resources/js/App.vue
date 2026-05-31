<script setup>
import GlobalLoader from './components/ui/GlobalLoader.vue';
import ToastContainer from './components/ui/ToastContainer.vue'
</script>

<template>
    <router-view />
    <GlobalLoader />
    <ToastContainer />
</template>
