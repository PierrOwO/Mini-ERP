import auth from './auth'
import axios from 'axios'

export default {
    async register(data) {
        await axios.get('/sanctum/csrf-cookie')
        return auth.post('/register', data)
    },
    async login(data) {
        await axios.get('/sanctum/csrf-cookie')
        return auth.post('/login', data)
    },
    logout() {
        return auth.post('/logout')
    },
    user() {
        return auth.get('/user')
    }
}
