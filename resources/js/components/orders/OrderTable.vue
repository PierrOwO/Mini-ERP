<script setup>
import OrderRow from './OrderRow.vue'

defineProps({
    orders: Array
})

defineEmits(['delete'])
</script>

<template>
    <table class="w-full">
        <thead>
            <tr class="text-left border-b">
                <th>Number</th>
                <th>User</th>
                <th>status</th>
                <th>Actions</th>
            </tr>
        </thead>

        <tbody>
            <OrderRow
                v-for="o in orders"
                :key="o.id"
                :order="o"
                @delete="$emit('delete', $event)"
            />
        </tbody>
    </table>
</template>
