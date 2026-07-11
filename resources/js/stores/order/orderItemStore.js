import { defineStore } from 'pinia'
import orderItemService from '../../services/order/orderItemService'

export const useOrderItemStore = defineStore('orderItem', {
    state: () => ({
        items: [],
        links: {},
        meta: null,
        loading: false,
        search: '',
        order_id: 2,
    }),

    actions: {
        async fetchOrderItems(page = 1) {
            this.loading = true

            try {
                const response = await orderItemService.getOrderItems(this.search, page, this.order_id)

                this.items = response.data
                this.links = response.links
                this.meta = response.meta

            } finally {
                this.loading = false
            }
        },

        setSearch(value) {
            this.search = value
            this.fetchOrderItems()
        },
        async setOrderId(value) {
            this.order_id = value
            await this.fetchOrderItems()
        }
    }
})
