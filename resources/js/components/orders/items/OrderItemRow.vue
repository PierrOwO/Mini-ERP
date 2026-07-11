<script setup>
defineProps({
    item: Object
})
const totalPrice = (item) => {
    return (item.price * item.quantity).toFixed(2);
}
defineEmits(['delete'])
</script>

<template>
    <tr class="bitem-b">
        <td>${{ item.number }}</td>
        <td>${{ item.price }}</td>
        <td>{{ item.product.name }}</td>
        <td>{{ item.product.sku }}</td>
        <td>{{ item.quantity }}</td>
        <td>${{ totalPrice(item) }}</td>

        <td class="text-right">
            <button
                @click="$emit('delete', item.id)"
                class="text-red-500"
            >
                Delete
            </button>
        </td>
    </tr>
</template>
