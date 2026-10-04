<script setup>
const props = defineProps({
    limit: Number,
    page: {
        type: Number,
        default: 1,
    },
});

const { data, error } = await useFetch('https://rickandmortyapi.com/api/episode', {
    query: { page: computed(() => props.page) },
});

const episodes = computed(() => data.value?.results.slice(0, props.limit));
</script>

<template>
    <section class="flex flex-col gap-8 items-center xl:items-start">
        <ListingHeader title="Episódios" :see-all-url="limit ? '/episode' : undefined" />

        <p v-if="error" class="opacity-70 text-center xl:text-left">
            Não foi possível carregar os episódios. Tente novamente mais tarde.
        </p>

        <EpisodesGrid v-else :episodes="episodes" />

        <Pagination v-if="!limit && data" :page="page" :total-pages="data.info.pages" />
    </section>
</template>
