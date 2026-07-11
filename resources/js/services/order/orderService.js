
import api from '../api'

export default {
    async getOrders(search = '', page = 1) {
        const response = await api.get('/orders', {
            params: {
                search,
                page
            }
        })

        return response.data
    },

    async createOrder(data) {
        const response = await api.post('/orders', data)

        return response.data
    },

    async updateOrder(id, data) {
        const response = await api.put(`/orders/${id}`, data)

        return response.data
    },

    async deleteOrder(id) {
        return await api.delete(`/orders/${id}`)
    }
}
