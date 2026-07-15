import { useAuthStore } from '../../stores/authStore'
import { useToastStore } from '../../stores/toastStore'

export async function authGuard(callback) {

    const auth  = useAuthStore()
    const toast = useToastStore()

    const allowed = await auth.ensureAuth()

    if (!allowed) {
        toast.error('Unauthorized')
        throw new Error('Unauthorized')
    }

    return await callback()
}