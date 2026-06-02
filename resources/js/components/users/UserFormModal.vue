<script setup>
import { ref, watch } from 'vue'
import BaseModal from '../base/BaseModal.vue'

const props = defineProps({
    modelValue: Boolean,
    product: Object
})

const emit = defineEmits(['update:modelValue', 'save'])

const form = ref({
    name: '',
    email: '',
    password: '',
    role: ''
})

watch(() => props.product, (val) => {
    if (val) {
        form.value = { ...val }
    }
})

const save = () => {
    emit('save', form.value)
}
</script>

<template>
    <BaseModal v-if="modelValue">
        <h2 class="text-xl font-bold mb-4">
            Product
        </h2>

        <input v-model="form.name" placeholder="Name" class="input" />
        <input v-model="form.email" type="email" placeholder="Email" class="input" />
        <input v-model="form.password" type="password" placeholder="Password" class="input" />
        <select v-model="form.role" placeholder="Role" class="input">
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
        </select>

        <div class="flex justify-end gap-2 mt-4">
            <button @click="$emit('update:modelValue', false)">
                Cancel
            </button>

            <button
                @click="save"
                class="bg-blue-600 text-white px-3 py-1 rounded"
            >
                Save
            </button>
        </div>
    </BaseModal>
</template>
