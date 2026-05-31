import { defineStore } from 'pinia'
import productService from '../services/productService'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        links: {},
        meta: null,
        loading: false,
        search: '',
    }),

    actions: {
        async fetchProducts(page = 1) {
            this.loading = true

            try {
                const response = await productService.getProducts(this.search, page)

                this.products = response.data
                this.links = response.links
                this.meta = response.meta
            } finally {
                this.loading = false
            }
        },

        setSearch(value) {
            this.search = value
            this.fetchProducts()
        }
    }
})
