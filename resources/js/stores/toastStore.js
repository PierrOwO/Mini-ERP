import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
    state: () => ({
        toasts: []
    }),

    actions: {
        add(message, type = 'success') {
            const id = crypto.randomUUID()
            const index = this.toasts.length

            this.toasts.push({
                id,
                message,
                type
            })

            setTimeout(() => {
                this.remove(id)
            }, 2000 + (index * 500))
        },

        remove(id) {
            this.toasts = this.toasts.filter(
                toast => toast.id !== id
            )
        },

        success(message) {
            this.add(message, 'success')
        },

        error(message) {
            this.add(message, 'error')
        },

        info(message) {
            this.add(message, 'info')
        }
    }
})
