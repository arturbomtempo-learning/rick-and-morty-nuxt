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
            class="flex gap-2 items-center py-2 px-3 rounded-[32px] bg-primary text-white dark:bg-surface dark:text-foreground transition-colors"
        >
            <IconsSquaresFour />
            Ver todos
        </NuxtLink>
    </header>
</template>
