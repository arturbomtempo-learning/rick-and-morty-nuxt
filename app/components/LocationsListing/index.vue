<script setup>
const props = defineProps({
    limit: Number,
    page: {
        type: Number,
        default: 1,
    },
});

const { data } = await useFetch('https://rickandmortyapi.com/api/location', {
    query: { page: computed(() => props.page) },
});

const locations = computed(() => data.value?.results.slice(0, props.limit));
</script>

<template>
    <section class="flex flex-col gap-8 items-center xl:items-start">
        <ListingHeader title="Localizações" :see-all-url="limit ? '/location' : undefined" />

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full">
            <LocationCard
                v-for="currentLocation of locations"
                :key="currentLocation.id"
                :id="currentLocation.id"
                :name="currentLocation.name"
                :type="currentLocation.type"
            />
        </div>

        <Pagination v-if="!limit && data" :page="page" :total-pages="data.info.pages" />
    </section>
</template>
