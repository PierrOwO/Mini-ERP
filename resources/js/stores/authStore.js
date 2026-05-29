import { defineStore } from 'pinia'
import authService from '../services/authService'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loading: false
    }),

    getters: {
        isAuth: (state) => !!state.user
    },

    actions: {

        async fetchUser() {
            try {
                const res = await authService.user()

                this.user = res.data?.id
                    ? res.data
                    : null

            } catch {
                this.user = null
            }
        },

        async register(name, email, password) {
            this.loading = true
            try {
                await authService.register({
                    name,
                    email,
                    password
                })
                await this.fetchUser()
            } finally {
                this.loading = false
            }
        },

        async login(email, password) {
            this.loading = true
            try {
                await authService.login({ email, password })

                await this.fetchUser()

            } finally {
                this.loading = false
            }
        },

        async logout() {
            try {
                await authService.logout()
            } finally {
                this.user = null
            }
        }
    }
})
