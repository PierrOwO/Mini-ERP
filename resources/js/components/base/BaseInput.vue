<script setup>
defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    autofocus: {
        type: Boolean,
        default: false
    }
})


defineEmits([
    'update:modelValue',
    'update:modelValue',
    'focus',
    'blur'
])
</script>

<template>
    <input
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :autofocus="autofocus"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
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
            margin-bottom-10-px
        "
    />
</template>
