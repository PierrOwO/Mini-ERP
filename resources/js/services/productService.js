import api from './api'
import { authGuard } from './auth/authGuard'

export default {
    async getProducts(search = '', page = 1) {
        return await authGuard(async () => {
            const response = await api.get('/products', {
                params: {
                    search,
                    page
                }
            })
    
            return response.data
        })
        
    },

    async createProduct(data) {
        return await authGuard(async () => {
            const response = await api.post('/products', data)

            return response.data
        })
        
    },

    async updateProduct(id, data) {
        return await authGuard(async () => {
            const response = await api.put(`/products/${id}`, data)

            return response.data
        })
        
    },

    async deleteProduct(id) {
        return await authGuard(async () => {
            return await api.delete(`/products/${id}`)
        })
        
    }
}
