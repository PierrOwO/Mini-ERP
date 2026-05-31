<script setup>
defineProps({
    product: Object
})

defineEmits(['delete'])
</script>

<template>
    <tr class="border-b">
        <td>{{ product.name }}</td>
        <td>{{ product.sku }}</td>
        <td>${{ product.price }}</td>
        <td>{{ product.quantity }}</td>

        <td class="text-right">
            <button
                @click="$emit('delete', product.id)"
                class="text-red-500"
            >
                Delete
            </button>
        </td>
    </tr>
</template>
