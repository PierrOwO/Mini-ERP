<script setup>
defineProps({
    type: {
        type: String,
        default: 'button'
    },

    disabled: {
        type: Boolean,
        default: false
    }
})
</script>


<template>
    <button
        :type="type"
        :disabled="disabled"
        class="
        px-4 py-2
        rounded-lg
        bg-blue-600
        text-white
        font-medium
        hover:bg-blue-700
        active:bg-blue-800
        hover:cursor-pointer
        transition
        shadow-sm
        disabled:opacity-50
    ">
        <slot />
    </button>
</template>
