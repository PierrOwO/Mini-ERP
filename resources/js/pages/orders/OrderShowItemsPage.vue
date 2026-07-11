<script setup>
import { ref, onMounted, watch } from 'vue'

import AppLayout from '../../layouts/AppLayout.vue'

import BasePagination from '../../components/base/BasePagination.vue'

import BaseCard from '../../components/base/BaseCard.vue'
import EmptyState from '../../components/ui/EmptyState.vue'

import OrderItemSearch from '../../components/orders/items/OrderItemSearch.vue'
import OrderItemTable from '../../components/orders/items/OrderItemTable.vue'
import ProductFormModal from '../../components/products/ProductFormModal.vue'
import OrderItemActions from '../../components/orders/items/OrderItemActions.vue'

import { useOrderItemStore } from '../../stores/order/orderItemStore.js'
import orderItemService from '../../services/order/orderItemService.js'

import { useRoute } from 'vue-router'
const route = useRoute()

const store = useOrderItemStore()

const search = ref('')

const orderId = route.params.id

onMounted(async () => {
await store.setOrderId(orderId)
})
watch(search, (val) => {
    store.search = val;
    store.fetchOrderItems()
})

const changePage = (page) => {
    store.fetchOrderItems(page)
}

const deleteOrderItem = async (id) => {
    await orderItemService.deleteOrder(id)
    await store.fetchOrderItems()
}
</script>

<template>
    <AppLayout>

        <BaseCard>
            <OrderItemActions>
                <h1 class="text-2xl font-bold">Order items</h1>

            </OrderItemActions>

            <OrderItemSearch v-model="search" class="mb-4" />

            <OrderItemTable
                :items="store.items"
                @delete="deleteOrderItem"
            />

            <EmptyState v-if="!store.items.length">
                No orders found
            </EmptyState>
        </BaseCard>

        <BasePagination
            :meta="store.meta"
            :links="store.meta?.links"
            @change="changePage"
        />
    </AppLayout>
</template>
