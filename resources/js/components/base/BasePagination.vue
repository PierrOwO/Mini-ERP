<script setup>
defineProps({
    meta: Object,
    links: Array
})

const emit = defineEmits(['change'])

const goToPage = (link) => {
    if (!link.url || link.active) return
    emit('change', link.page)
}
</script>

<template>
    <div v-if="meta" class="flex items-center justify-between mt-6">

        <!-- INFO -->
        <div class="text-sm text-gray-600">
            Showing {{ meta.from }} - {{ meta.to }} of {{ meta.total }}
        </div>

        <!-- PAGINATION -->
        <div class="flex gap-2">

            <button
                v-for="link in links"
                :key="link.label"
                @click="goToPage(link)"
                :disabled="!link.url || link.active"
                class="px-3 py-1 border rounded"
                :class="{
                    'bg-blue-500 text-white': link.active,
                    'opacity-50 cursor-not-allowed': !link.url
                }"
                v-html="link.label"
            />
        </div>
    </div>
</template>
