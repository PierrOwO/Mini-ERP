<script setup>
import { onMounted } from 'vue'
import AppLayout from '../../layouts/AppLayout.vue'

import { useProductStore } from '../../stores/productStore.js'

const productStore = useProductStore()

onMounted(() => {
    productStore.fetchProducts()
})
</script>

<template>
    <AppLayout>
        <div class="flex items-center justify-between mb-6">
            <h1 class="text-3xl font-bold">
                Products
            </h1>
        </div>

        <div class="bg-white rounded-lg border overflow-hidden">
            <table class="w-full">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="text-left p-4">Name</th>
                        <th class="text-left p-4">SKU</th>
                        <th class="text-left p-4">Price</th>
                        <th class="text-left p-4">Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    <tr
                        v-for="product in productStore.products"
                        :key="product.id"
                        class="border-t"
                    >
                        <td class="p-4">
                            {{ product.name }}
                        </td>

                        <td class="p-4">
                            {{ product.sku }}
                        </td>

                        <td class="p-4">
                            ${{ product.price }}
                        </td>

                        <td class="p-4">
                            {{ product.quantity }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </AppLayout>
</template>
