import { defineStore } from 'pinia'
import orderItemService from '../../services/order/orderItemService'
import orderService from '../../services/order/orderService'
import { useToastStore } from '../toastStore'

export const useOrderItemStore = defineStore('orderItem', {
    state: () => ({
        items: [],
        links: {},
        meta: null,
        loading: false,
        search: '',
        order_id: 2,
        order: {},
    }),

    actions: {
        async fetchOrderItems(page = 1) {
            this.loading = true

            try {
                const response = await orderItemService.getOrderItems(this.search, page, this.order_id)
                const orderResponse = await orderService.showOrder(this.order_id)

                this.items = response.data
                this.links = response.links
                this.meta = response.meta
                this.order = orderResponse.data
                console.log('order: ', this.order)

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
        },
        
        async addToOrder(data) {
            const toast = useToastStore()
            try {
                await orderItemService.createOrderItem(data)
                toast.success('Product added successfully')

            } catch (error) {
                const toast = useToastStore()
                const errors = error.response?.data?.errors

                if (errors) {
                    Object.values(errors)
                        .flat()
                        .forEach(message => {
                            toast.error(message)
                        })
                } else {
                    toast.error(
                        error.response?.data?.message ||
                        error.message ||
                        'Something went wrong'
                    )
                }
                throw error
            } finally {
                this.loading = false
            }
        }
    }
})
