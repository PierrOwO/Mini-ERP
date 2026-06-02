<script setup>
defineProps({
    user: Object
})
defineEmits(['delete'])
</script>

<template>
    <tr class="border-b">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.role ?? 'none' }}</td>

        <td class="text-right">
            <button
                @click="$emit('delete', user.id)"
                class="text-red-500"
            >
                Delete
            </button>
        </td>
    </tr>
</template>
