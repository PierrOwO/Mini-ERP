<script setup>
import { computed, ref } from 'vue'
import BaseInput from '../base/BaseInput.vue'

const props = defineProps({
    modelValue: String,
    labelText: String,
    autofocus: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'text'
    }
})

const emit = defineEmits(['update:modelValue'])

const focused = ref(false)

const hasValue = computed(() => {
    return props.modelValue?.length > 0
})
</script>

<template>
    <div class="floating-wrapper">
        <BaseInput
            :model-value="modelValue"
            :type="type"
            autofocus="autofocus"
            @focus="focused = true"
            @blur="focused = false"
            @update:model-value="emit('update:modelValue', $event)"
        />

        <label
            :class="{
                floating: focused || hasValue
            }"
        >
            {{ labelText }}
        </label>
    </div>
</template>

<style scoped>
.floating-wrapper {
    position: relative;
    border: none;
    width: 100%;
}

.floating-wrapper label {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: all .2s ease;
    pointer-events: none;
    background: white;
    padding: 0 2px;
}

.floating-wrapper label.floating {
    top: 8px;
    font-size: 12px;
    color: #3b82f6;
}
</style>
