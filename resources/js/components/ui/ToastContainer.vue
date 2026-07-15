<script setup>
import { useToastStore } from '../../stores/toastStore.js'
import Toast from './Toast.vue'

const toastStore = useToastStore()
</script>

<template>
    <div class="fixed top-4 right-4 z-50 w-80">
        <TransitionGroup
            name="toast"
            tag="div"
            class="flex flex-col gap-2"
        >
            <Toast
                v-for="toast in toastStore.toasts"
                :key="toast.id"
                :message="toast.message"
                :type="toast.type"
            />
        </TransitionGroup>
    </div>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active,
.toast-move {
    transition: all .3s ease;
}

.toast-enter-from {
    opacity: 0;
    transform: translateY(-12px) scale(0.95);
}

.toast-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
}

.toast-leave-from {
    opacity: 1;
}

.toast-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.toast-leave-active {
    position: absolute;
    width: 100%;
}
</style>
