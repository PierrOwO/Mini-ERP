import api from './api'

export default {
    async getProducts(search = '', page = 1) {
        const response = await api.get('/products', {
            params: {
                search,
                page
            }
        })

        return response.data
    },

    async createProduct(data) {
        const response = await api.post('/products', data)

        return response.data
    },

    async updateProduct(id, data) {
        const response = await api.put(`/products/${id}`, data)

        return response.data
    },

    async deleteProduct(id) {
        return await api.delete(`/products/${id}`)
    },

    async addToOrder(data) {
        const response = await api.post(`/order-items`, data)

        return response.data
    }
}
