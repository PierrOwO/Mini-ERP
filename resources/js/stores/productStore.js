import { defineStore } from 'pinia'
import productService from '../services/productService'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        loading: false,
    }),

    actions: {
        async fetchProducts(search = '') {
            this.loading = true

            try {
                const response = await productService.getProducts(search)

                this.products = response.data
            } finally {
                this.loading = false
            }
        }
    }
})
