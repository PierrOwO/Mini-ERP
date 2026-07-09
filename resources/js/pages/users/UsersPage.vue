<script setup>
import { ref, onMounted, watch } from 'vue'

import AppLayout from '../../layouts/AppLayout.vue'

import BaseCard from '../../components/base/BaseCard.vue'
import BasePagination from '../../components/base/BasePagination.vue'

import EmptyState from '../../components/ui/EmptyState.vue'

import UserSearch from '../../components/users/UserSearch.vue'
import UserTable from '../../components/users/UserTable.vue'
import UserFormModal from '../../components/users/UserFormModal.vue'
import UserActions from '../../components/users/UserActions.vue'

import { useUserStore } from '../../stores/userStore.js'
import userService from '../../services/userService.js'

const store = useUserStore()

const search = ref('')
const showModal = ref(false)
const selectedUser = ref(null)

onMounted(() => store.fetchUsers(1))

watch(search, (val) => {
    store.search = val
    store.fetchUsers()
})

const changePage = (page) => {
    store.fetchUsers(page)
}

const openCreate = () => {
    selectedUser.value = null
    showModal.value = true
}

const openEdit = (user) => {
    selectedUser.value = user
    showModal.value = true
}

const saveUser = async (data) => {
    if (selectedUser.value) {
        await userService.update(selectedUser.value.id, data)
    } else {
        await userService.create(data)
    }

    showModal.value = false
    await store.fetchUsers()
}

const deleteUser = async (id) => {
    await userService.remove(id)
    await store.fetchUsers()
}

const changeRole = async (id, role) => {
    await userService.update(id, {role:role})
    await store.fetchUsers()
}
</script>

<template>
    <AppLayout>
        <BaseCard>
            <UserActions>
                <h1 class="text-2xl font-bold">Users</h1>

                <button
                    @click="openCreate"
                    class="bg-blue-600 text-white px-3 py-2 rounded"
                >
                    Create
                </button>
            </UserActions>

            <UserSearch v-model="search" class="mb-4" />

            <UserTable
                :users="store.users"
                @delete="deleteUser"
                @edit="openEdit"
                @change-role="changeRole"
            />

            <EmptyState v-if="!store.users.length">
                No users found
            </EmptyState>
        </BaseCard>

        <BasePagination
            :meta="store.meta"
            :links="store.meta?.links"
            @change="changePage"
        />

        <UserFormModal
            v-model="showModal"
            :user="selectedUser"
            @save="saveUser"
        />
    </AppLayout>
</template>
