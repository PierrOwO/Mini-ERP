<script setup>
import OrderItemRow from './OrderItemRow.vue';

defineProps({
    items: Array
})

defineEmits(['delete'])
</script>

<template>
    <table class="w-full">
        <thead>
            <tr class="text-left border-b">
                <th>Number</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <OrderItemRow
                v-for="i in items"
                :key="i.id"
                :item="i"
                @delete="$emit('delete', $event)"
            />
        </tbody>
    </table>
</template>
