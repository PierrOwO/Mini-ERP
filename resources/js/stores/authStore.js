import { defineStore } from 'pinia'
import authService from '../services/authService'
import { useToastStore } from './toastStore'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        loading: false
    }),



    getters: {
        isAuth: (state)     => !!state.user,
        isAdmin: (state)    => state.user?.roles?.includes('admin'),
        isEmployee: (state) => state.user?.roles?.includes('employee'),
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
            } catch (error) {
                const toast = useToastStore()
                const errors = error.response?.data?.errors

                if (errors) {
                    Object.values(errors)
                        .flat()
                        .forEach(message => {
                            toast.error(message)
                        })
                } else {
                    toast.error(
                        error.response?.data?.message ||
                        error.message ||
                        'Something went wrong'
                    )
                }
                throw error
            } finally {
                this.loading = false
            }
        },

        async login(email, password) {
            this.loading = true
            try {
                await authService.login({ email, password })
                const toast = useToastStore()

                toast.success('Logged in successfully')
                await this.fetchUser()

            } catch (error) {
                const toast = useToastStore()
                const errors = error.response?.data?.errors

                if (errors) {
                    Object.values(errors)
                        .flat()
                        .forEach(message => {
                            toast.error(message)
                        })
                } else {
                    toast.error(
                        error.response?.data?.message ||
                        error.message ||
                        'Something went wrong'
                    )
                }
                throw error
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
