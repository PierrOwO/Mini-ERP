
import api from '../api'
import { authGuard } from '../auth/authGuard'

export default {
    async getOrderItems(search = '', page = 1, order_id = 2) {
        return await authGuard(async () => {
            const response = await api.get('/order-items', {
                params: {
                    search,
                    page,
                    order_id
                }
            })
    
            return response.data
        })
        
    },

    async createOrderItem(data) {
        return await authGuard(async () => {
            const response = await api.post('/order-items', data)

            return response.data
        })
        
    },

    async updateOrderItem(id, data) {
        return await authGuard(async () => {
            const response = await api.put(`/order-items/${id}`, data)

            return response.data
        })
       
    },

    async deleteOrderItem(id) {
        return await authGuard(async () => {
            return await api.delete(`/order-items/${id}`)
        })
        
    }
}
