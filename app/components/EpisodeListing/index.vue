<script setup>
const props = defineProps({
    limit: Number,
    page: {
        type: Number,
        default: 1,
    },
});

const { data } = await useFetch('https://rickandmortyapi.com/api/episode', {
    query: { page: computed(() => props.page) },
});

const episodes = computed(() => data.value?.results.slice(0, props.limit));
</script>

<template>
    <section class="flex flex-col gap-8 items-center xl:items-start">
        <ListingHeader title="Episódios" :see-all-url="limit ? '/episode' : undefined" />

        <div class="flex gap-4 flex-wrap justify-center lg:grid lg:grid-cols-[repeat(4,1fr)]">
            <EpisodeCard
                v-for="currentEpisode of episodes"
                :key="currentEpisode.id"
                :episode="currentEpisode"
            />
        </div>

        <Pagination v-if="!limit && data" :page="page" :total-pages="data.info.pages" />
    </section>
</template>
