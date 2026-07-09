import api from './api'
import auth from './auth'

export default {
  async getAll(params = {}) {
    const response = await api.get('/users', { params })
    return response.data
  },

  async getOne(id) {
    const response = await api.get(`/users/${id}`)
    return response.data
  },

  async create(data) {
    const response = await api.post('/users', data)
    return response.data
  },

  async update(id, data) {
    const response = await api.put(`/users/${id}`, data)
    console.log('data', data);
    return response.data
  },

  async patch(id, data) {
    const response = await api.patch(`/users/${id}`, data)
    return response.data
  },

  async remove(id) {
    const response = await api.delete(`/users/${id}`)
    return response.data
  },

  async me() {
    const response = await auth.get('/user')
    return response.data
  }
}
