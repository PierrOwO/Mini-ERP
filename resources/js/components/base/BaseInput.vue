<script setup>
defineProps({
    modelValue: String,
    placeholder: String,
    type: {
        type: String,
        default: 'text'
    }
})

defineEmits(['update:modelValue'])
</script>

<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="
            w-full
            px-3 py-2
            border border-gray-200
            rounded-lg
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            outline-none
            transition
        "
    />
</template>
