import axios from 'axios'
import { useToastStore } from '../stores/toastStore'

const http = axios.create({
    baseURL: '/auth',
    withCredentials: true,
    withXSRFToken: true,
})

http.interceptors.response.use(
    (response) => response,
    (error) => {
        const toast = useToastStore()

        if (error.response?.data?.message) {
            toast.error(error.response.data.message)
        } else {
            toast.error('Something went wrong')
        }

        return Promise.reject(error)
    }
)

export default http
