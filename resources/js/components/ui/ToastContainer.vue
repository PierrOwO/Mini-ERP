<script setup>
import { useUiStore } from '../../stores/uiStore'
import Toast from './Toast.vue'

const ui = useUiStore()
</script>

<template>
    <div class="fixed top-4 right-4 flex flex-col gap-2 z-50">
        <Toast
            v-for="t in ui.toasts"
            :key="t.id"
            :message="t.message"
            :type="t.type"
        />
    </div>
</template>
