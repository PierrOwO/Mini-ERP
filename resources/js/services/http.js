import axios from 'axios'
import { useUiStore } from '../stores/uiStore'

const http = axios.create({
    baseURL: '/auth',
    withCredentials: true,
    withXSRFToken: true,
})

http.interceptors.response.use(
    (response) => response,
    (error) => {
        const ui = useUiStore()

        if (error.response?.data?.message) {
            ui.addToast(error.response.data.message, 'error')
        } else {
            ui.addToast('Something went wrong', 'error')
        }

        return Promise.reject(error)
    }
)

export default http
