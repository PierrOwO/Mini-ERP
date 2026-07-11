import { defineStore } from 'pinia'
import orderService from '../../services/order/orderService'

export const useOrderStore = defineStore('order', {
    state: () => ({
        orders: [],
        links: {},
        meta: null,
        loading: false,
        search: '',
    }),

    actions: {
        async fetchOrders(page = 1) {
            this.loading = true

            try {
                const response = await orderService.getOrders(this.search, page)

                this.orders = response.data
                this.links = response.links
                this.meta = response.meta
            } finally {
                this.loading = false
            }
        },

        setSearch(value) {
            this.search = value
            this.fetchOrders()
        }
    }
})
