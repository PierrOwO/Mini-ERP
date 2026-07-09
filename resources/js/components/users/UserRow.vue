<script setup>
import { useAuthStore } from '../../stores/authStore';

defineProps({
    user: Object
})

defineEmits(['delete', 'changeRole'])

const auth = useAuthStore()

</script>

<template>
    <tr class="border-b">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role ?? 'none' }}</td>

        <td
            v-if="auth.user?.id !== user.id"
            class="text-right"
        >
            <button
                v-if="user.role === 'admin'"
                @click="$emit('changeRole', user.id, 'employee')"
                class="text-orange-500 border-orange-500 border bg-gray-40"
            >
                set Employee
            </button>
            <button
                v-else
                @click="$emit('changeRole', user.id, 'admin')"
                class="text-green-500 border-green-500 border bg-gray-40"
            >
                set admin
            </button>
            <button
                v-if="user.role !== 'admin'"
                @click="$emit('delete', user.id)"
                class="text-red-500 border-red-500 border bg-gray-40"
            >
                Delete
            </button>
        </td>
        <td
            v-else
            class="text-right"
        >
            <label
                class="text-blue-500"
            >
                my account
            </label>
        </td>
    </tr>
</template>
<style scoped>
button {
    padding: 0px 3px;
    margin: 2px;
    cursor: pointer;
    border-radius: 5px;
}

</style>
