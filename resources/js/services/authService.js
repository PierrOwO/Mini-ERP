import auth from './auth'
import axios from 'axios'

export default {
    async login(data) {
        await axios.get('/sanctum/csrf-cookie', {
          //  withCredentials: true
        })
        return auth.post('/login', data)
    },
    logout() {
        return auth.post('/logout')
    },
    user() {
        return auth.get('/user')
    }
}
