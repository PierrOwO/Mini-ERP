<script setup>
import { ref, onMounted, watch } from 'vue'

import AppLayout from '../../layouts/AppLayout.vue'

import BasePagination from '../../components/base/BasePagination.vue'

import BaseCard from '../../components/base/BaseCard.vue'
import EmptyState from '../../components/ui/EmptyState.vue'

import ProductSearch from '../../components/products/ProductSearch.vue'
import ProductTable from '../../components/products/ProductTable.vue'
import ProductFormModal from '../../components/products/ProductFormModal.vue'
import ProductActions from '../../components/products/ProductActions.vue'

import { useProductStore } from '../../stores/productStore'
import productService from '../../services/productService'

const store = useProductStore()

const search = ref('')
const showModal = ref(false)
const selectedProduct = ref(null)

onMounted(() => store.fetchProducts(1))

watch(search, (val) => {
    store.search = val;
    store.fetchProducts()
})

const changePage = (page) => {
    store.fetchProducts(page)
}

const openCreate = () => {
    selectedProduct.value = null
    showModal.value = true
}

const openEdit = (product) => {
    selectedProduct.value = product
    showModal.value = true
}

const saveProduct = async (data) => {
    if (selectedProduct.value) {
        await productService.updateProduct(selectedProduct.value.id, data)
    } else {
        await productService.createProduct(data)
    }

    showModal.value = false
    await store.fetchProducts()
}

const deleteProduct = async (id) => {
    await productService.deleteProduct(id)
    await store.fetchProducts()
}
</script>

<template>
    <AppLayout>

        <BaseCard>
            <ProductActions>
                <h1 class="text-2xl font-bold">Products</h1>

                <button
                    @click="openCreate"
                    class="bg-blue-600 text-white px-3 py-2 rounded"
                >
                    Create
                </button>
            </ProductActions>

            <ProductSearch v-model="search" class="mb-4" />

            <ProductTable
                :products="store.products"
                @delete="deleteProduct"
            />

            <EmptyState v-if="!store.products.length">
                No products found
            </EmptyState>
        </BaseCard>

        <ProductFormModal
            v-model="showModal"
            :product="selectedProduct"
            @save="saveProduct"
        />
        <BasePagination
            :meta="store.meta"
            :links="store.meta?.links"
            @change="changePage"
        />
    </AppLayout>
</template>
