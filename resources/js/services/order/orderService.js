
import api from '../api'
import { authGuard } from '../auth/authGuard'

export default {
    async getOrders(search = '', page = 1) {
        return await authGuard(async () => {
            const response = await api.get('/orders', {
                params: {
                    search,
                    page
                }
            })

            return response.data
        })
        

        
    },

    async showOrder(id) {
        return await authGuard(async () => {
            const response = await api.get(`/orders/${id}`)

            return response.data
        })
        
    },

    async createOrder(data) {
        return await authGuard(async () => {
            const response = await api.post('/orders', data)

            return response.data
        })
        
    },

    async updateOrder(id, data) {
        return await authGuard(async () => {
            const response = await api.put(`/orders/${id}`, data)

            return response.data
        })
        
    },

    async deleteOrder(id) {
        return await authGuard(async () => {
            return await api.delete(`/orders/${id}`)
        })
        
    }
}
