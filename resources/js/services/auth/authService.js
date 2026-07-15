import auth from '../auth'

export default {
    async register(data) {
        return auth.post('/register', data)
    },
    async login(data) {
        return auth.post('/login', data)
    },
    logout() {
        return auth.post('/logout')
    },
    user() {
        return auth.get('/user')
    }
}
