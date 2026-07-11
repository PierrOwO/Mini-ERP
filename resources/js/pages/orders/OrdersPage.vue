<script setup>
import { ref, onMounted, watch } from 'vue'

import AppLayout from '../../layouts/AppLayout.vue'

import BasePagination from '../../components/base/BasePagination.vue'

import BaseCard from '../../components/base/BaseCard.vue'
import EmptyState from '../../components/ui/EmptyState.vue'

import OrderSearch from '../../components/orders/OrderSearch.vue'
import OrderTable from '../../components/orders/OrderTable.vue'
import ProductFormModal from '../../components/products/ProductFormModal.vue'
import OrderActions from '../../components/orders/OrderActions.vue'

import { useOrderStore } from '../../stores/order/orderStore.js'
import orderService from '../../services/order/orderService.js'

const store = useOrderStore()

const search = ref('')
const showModal = ref(false)
const selectedOrder = ref(null)

onMounted(() => store.fetchOrders(1))

watch(search, (val) => {
    store.search = val;
    store.fetchOrders()
})

const changePage = (page) => {
    store.fetchOrders(page)
}

const openCreate = () => {
    selectedOrder.value = null
    showModal.value = true
}

const openEdit = (product) => {
    selectedOrder.value = product
    showModal.value = true
}

const saveProduct = async (data) => {
    if (selectedOrder.value) {
        await orderService.updateOrder(selectedOrder.value.id, data)
    } else {
        await orderService.createOrder(data)
    }

    showModal.value = false
    await store.fetchOrders()
}

const deleteOrder = async (id) => {
    await orderService.deleteOrder(id)
    await store.fetchOrders()
}
</script>

<template>
    <AppLayout>

        <BaseCard>
            <OrderActions>
                <h1 class="text-2xl font-bold">Orders</h1>

                <button
                    @click="openCreate"
                    class="bg-blue-600 text-white px-3 py-2 rounded"
                >
                    Create
                </button>
            </OrderActions>

            <OrderSearch v-model="search" class="mb-4" />

            <OrderTable
                :orders="store.orders"
                @delete="deleteOrder"
            />

            <EmptyState v-if="!store.orders.length">
                No orders found
            </EmptyState>
        </BaseCard>

        <ProductFormModal
            v-model="showModal"
            :product="selectedOrder"
            @save="saveProduct"
        />
        <BasePagination
            :meta="store.meta"
            :links="store.meta?.links"
            @change="changePage"
        />
    </AppLayout>
</template>
