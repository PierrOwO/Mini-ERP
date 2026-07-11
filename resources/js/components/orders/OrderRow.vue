<script setup>
defineProps({
    order: Object
})
const totalPrice = (order) => {
    return (order.price * order.quantity).toFixed(2);
}
defineEmits(['delete'])
</script>

<template>
    <tr class="border-b">
        <td>{{ order.number }}</td>
        <td>{{ order.user.name }}</td>
        <td>{{ order.status }}</td>
        <td>
            <router-link
                :to="`/orders/${order.id}`"
                class="px-3 py-2 rounded-lg hover:bg-gray-100"
            >
                show items
            </router-link>
        </td>
    </tr>
</template>
