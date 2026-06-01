<script setup>
defineProps({
    text: {
        type: String,
        default: null
    },
})

defineEmits(['update:modelValue'])
</script>

<template>
    <label v-if="text">{{ text }}</label>
    <label v-else>
        <slot></slot>
    </label>
</template>
