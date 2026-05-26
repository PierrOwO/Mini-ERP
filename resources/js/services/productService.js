import api from './api'

export default {
    async getProducts(search = '') {
        const response = await api.get('/products', {
            params: { search }
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
    }
}
