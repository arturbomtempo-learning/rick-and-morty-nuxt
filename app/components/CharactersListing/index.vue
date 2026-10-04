<script setup>
const props = defineProps({
    limit: Number,
    page: {
        type: Number,
        default: 1,
    },
});

const { data, error } = await useFetch('https://rickandmortyapi.com/api/character', {
    query: { page: computed(() => props.page) },
});

const characters = computed(() => data.value?.results.slice(0, props.limit));
</script>

<template>
    <section class="flex flex-col gap-8 items-center xl:items-start">
        <ListingHeader title="Personagens" :see-all-url="limit ? '/character' : undefined" />

        <p v-if="error" class="opacity-70 text-center xl:text-left">
            Não foi possível carregar os personagens. Tente novamente mais tarde.
        </p>

        <CharactersGrid v-else :characters="characters" />

        <Pagination v-if="!limit && data" :page="page" :total-pages="data.info.pages" />
    </section>
</template>
