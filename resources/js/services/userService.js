import api from './api'
import auth from './auth'
import { authGuard } from './auth/authGuard'

export default {
  async getAll(params = {}) {
    return await authGuard(async () => {
      const response = await api.get('/users', { params })
      
      return response.data
    })
    
  },

  async getOne(id) {
    return await authGuard(async () => {
      const response = await api.get(`/users/${id}`)
      
      return response.data
    })
    
  },

  async create(data) {
    return await authGuard(async () => {
      const response = await api.post('/users', data)
      
      return response.data
    })
    
  },

  async update(id, data) {
    return await authGuard(async () => {
      const response = await api.put(`/users/${id}`, data)
      
      return response.data
    })
    
  },

  async patch(id, data) {
    return await authGuard(async () => {
      const response = await api.patch(`/users/${id}`, data)
    
      return response.data
    })
    
  },

  async remove(id) {
    return await authGuard(async () => {
      const response = await api.delete(`/users/${id}`)
    
      return response.data
    })
    
  },

  async me() {
    return await authGuard(async () => {
      const response = await auth.get('/user')

      return response.data
    })
    
  }
}
