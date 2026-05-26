<template>
    <div class="min-h-screen bg-gray-100">
        <aside class="w-64 fixed left-0 top-0 h-screen bg-white border-r">
            Sidebar
        </aside>

        <main class="ml-64 p-6">
            <slot />
        </main>

        <router-link to="/products">
        Products
        </router-link>
    </div>
</template>
