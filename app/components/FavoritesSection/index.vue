<script setup>
const props = defineProps({
    title: String,
    seeAllUrl: String,
    isLoading: Boolean,
    hasError: Boolean,
    isEmpty: Boolean,
    emptyMessage: String,
});
</script>

<template>
    <section class="flex flex-col gap-8 items-center xl:items-start">
        <ListingHeader :title="title" :see-all-url="seeAllUrl" />

        <p v-if="isLoading" class="opacity-70" aria-live="polite">Carregando favoritos...</p>

        <p v-else-if="hasError" class="opacity-70 text-center xl:text-left">
            Não foi possível carregar seus favoritos. Tente novamente mais tarde.
        </p>

        <p v-else-if="isEmpty" class="opacity-70 text-center xl:text-left">
            {{ emptyMessage }}
        </p>

        <slot v-else />
    </section>
</template>
