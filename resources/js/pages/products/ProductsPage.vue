<script setup>
import { onMounted } from 'vue'
import AppLayout from '../../layouts/AppLayout.vue'
import BaseCard from '../../components/base/BaseCard.vue'

import { useProductStore } from '../../stores/productStore'
import EmptyState from '../../components/ui/EmptyState.vue'

const productStore = useProductStore()

onMounted(() => {
    productStore.fetchProducts()
})
</script>

<template>
    <AppLayout>

        <BaseCard class="mb-6">
            <h1 class="text-3xl font-bold">
                Products
            </h1>
        </BaseCard>

        <BaseCard>
            <table class="w-full">
                <thead>
                    <tr class="text-left border-b">
                        <th>Name</th>
                        <th>SKU</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="product in productStore.products"
                        :key="product.id"
                        class="border-b"
                    >
                        <td>{{ product.name }}</td>
                        <td>{{ product.sku }}</td>
                        <td>${{ product.price }}</td>
                        <td>{{ product.quantity }}</td>
                    </tr>
                </tbody>
            </table>

            <EmptyState v-if="!productStore.products.length">
                No products found
            </EmptyState>
        </BaseCard>

    </AppLayout>
</template>
