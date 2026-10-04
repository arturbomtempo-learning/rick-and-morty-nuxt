<script setup>
const props = defineProps({
    title: String,
    seeAllUrl: String,
});
</script>

<template>
    <header class="flex gap-4">
        <h2 class="font-bold text-2xl">{{ title }}</h2>

        <NuxtLink
            v-if="seeAllUrl"
            :to="seeAllUrl"
            class="flex gap-2 py-2 px-3 bg-[#313234] rounded-[32px]"
        >
            <IconsSquaresFour />
            Ver todos
        </NuxtLink>
    </header>
</template>
