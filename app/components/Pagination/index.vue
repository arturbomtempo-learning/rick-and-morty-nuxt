<script setup>
const props = defineProps({
    page: Number,
    totalPages: Number,
});
</script>

<template>
    <nav class="flex gap-4 items-center justify-center w-full">
        <NuxtLink
            v-if="page > 1"
            :to="{ query: { page: page - 1 } }"
            class="py-2 px-4 bg-[#313234] rounded-[32px]"
        >
            Anterior
        </NuxtLink>

        <p>Página {{ page }} de {{ totalPages }}</p>

        <NuxtLink
            v-if="page < totalPages"
            :to="{ query: { page: page + 1 } }"
            class="py-2 px-4 bg-[#11b0c8] rounded-[32px]"
        >
            Próxima
        </NuxtLink>
    </nav>
</template>
