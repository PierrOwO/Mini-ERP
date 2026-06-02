<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const localValue = ref(props.modelValue)

let timeout = null

watch(localValue, (val) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        emit('update:modelValue', val)
    }, 1000)
})
</script>

<template>
    <input
        v-model="localValue"
        placeholder="Search products..."
        class="w-full px-3 py-2 border rounded-lg"
    />
</template>
