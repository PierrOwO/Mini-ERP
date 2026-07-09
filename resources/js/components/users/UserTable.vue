<script setup>
import UserRow from './UserRow.vue'

defineProps({
    users: Object
})
defineEmits(['delete', 'changeRole'])
</script>

<template>
    <table class="w-full">
        <thead>
            <tr class="text-left border-b">
                <th>Name</th>
                <th>Email</th>
                <th>role</th>
                <th>actions</th>
            </tr>
        </thead>

        <tbody>
            <UserRow
                v-for="u in users"
                :key="u.id"
                :user="u"
                @delete="$emit('delete', $event)"
                @change-role="(id, role) => $emit('changeRole', id, role)"
            />
        </tbody>
    </table>
</template>
