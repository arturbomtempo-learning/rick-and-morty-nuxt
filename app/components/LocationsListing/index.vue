<script setup>
const props = defineProps({
    limit: Number,
    page: {
        type: Number,
        default: 1,
    },
});

const { data, error } = await useFetch('https://rickandmortyapi.com/api/location', {
    query: { page: computed(() => props.page) },
});

const locations = computed(() => data.value?.results.slice(0, props.limit));
</script>

<template>
    <section class="flex flex-col gap-8 items-center xl:items-start">
        <ListingHeader title="Localizações" :see-all-url="limit ? '/location' : undefined" />

        <p v-if="error" class="opacity-70 text-center xl:text-left">
            Não foi possível carregar as localizações. Tente novamente mais tarde.
        </p>

        <LocationsGrid v-else :locations="locations" />

        <Pagination v-if="!limit && data" :page="page" :total-pages="data.info.pages" />
    </section>
</template>
