<script setup>
import ProductRow from './ProductRow.vue'

defineProps({
    products: Array
})

defineEmits(['delete'])
</script>

<template>
    <table class="w-full">
        <thead>
            <tr class="text-left border-b">
                <th>Name</th>
                <th>SKU</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            <ProductRow
                v-for="p in products"
                :key="p.id"
                :product="p"
                @delete="$emit('delete', $event)"
            />
        </tbody>
    </table>
</template>
