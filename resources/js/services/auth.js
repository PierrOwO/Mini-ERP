import axios from 'axios'

const auth = axios.create({
    baseURL: '/auth',
    withCredentials: true,
    withXSRFToken: true,
})

export default auth
