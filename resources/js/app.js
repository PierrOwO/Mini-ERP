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

app.mount('#app')

// INIT AUTH
await getCsrfCookie()

const auth = useAuthStore()
auth.fetchUser()
