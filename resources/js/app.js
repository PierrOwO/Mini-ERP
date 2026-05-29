import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/authStore'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// INIT AUTH
const auth = useAuthStore()
auth.fetchUser()
