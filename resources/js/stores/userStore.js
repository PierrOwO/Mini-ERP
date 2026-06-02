import { defineStore } from 'pinia'
import userService from '@/services/userService'

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [],
        links: {},
        meta: null,
        loading: false,
        search: '',
    }),

    actions: {
        async fetchUsers(page = 1) {
            this.loading = true

            try {
                const response = await userService.getAll({
                    search: this.search,
                    page
                })

                this.users = response.data
                this.links = response.links
                this.meta = response.meta
            } finally {
                this.loading = false
            }
        },

        setSearch(value) {
            this.search = value
            this.fetchUsers()
        },

        async deleteUser(id) {
            await userService.remove(id)

            this.users = this.users.filter(u => u.id !== id)
        },

        addUser(user) {
            this.users.unshift(user)
        },

        async updateUser(id, payload) {
            const res = await userService.update(id, payload)

            const index = this.users.findIndex(u => u.id === id)

            if (index !== -1) {
                this.users[index] = res.data
            }
        }
    }
})
