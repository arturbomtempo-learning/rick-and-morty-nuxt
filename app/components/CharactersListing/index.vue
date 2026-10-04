<script setup>
const props = defineProps({
    limit: Number,
    page: {
        type: Number,
        default: 1,
    },
});

const { data } = await useFetch('https://rickandmortyapi.com/api/character', {
    query: { page: computed(() => props.page) },
});

const characters = computed(() => data.value?.results.slice(0, props.limit));
</script>

<template>
    <section class="flex flex-col gap-8 items-center xl:items-start">
        <ListingHeader title="Personagens" :see-all-url="limit ? '/character' : undefined" />

        <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
            <CharacterCard
                v-for="currentCharacter of characters"
                :key="currentCharacter.id"
                :character="currentCharacter"
            />
        </div>

        <Pagination v-if="!limit && data" :page="page" :total-pages="data.info.pages" />
    </section>
</template>
