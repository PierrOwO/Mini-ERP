import '../css/app.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { getCsrfCookie } from './services/csrf'


import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/authStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// INIT AUTH
await getCsrfCookie()

const auth = useAuthStore()
auth.fetchUser()

// LISTENER LOGOUT Z INNEJ KARTY
window.addEventListener('storage', (event) => {
    if (event.key === 'logout') {
        auth.user = null
        router.push('/login')
    }
})

app.mount('#app')