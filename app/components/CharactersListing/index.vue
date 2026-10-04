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
            <Card v-for="currentCharacter of characters" :key="currentCharacter.id">
                <img
                    :src="currentCharacter.image"
                    width="262"
                    height="200"
                    class="rounded-2xl h-[200px] object-cover"
                />

                <div class="grid grid-cols-[1fr,48px]">
                    <div class="flex flex-col gap-4">
                        <p class="text-base font-bold">{{ currentCharacter.name }}</p>

                        <div class="flex flex-col gap-2">
                            <p>
                                {{ currentCharacter.status === 'Alive' ? 'Vivo' : 'Morto' }}
                            </p>
                            <p>{{ currentCharacter.species }}</p>
                            <p>{{ currentCharacter.origin.name }}</p>
                        </div>
                    </div>

                    <span>
                        <IconsHeartFilled v-if="currentCharacter.status === 'Alive'" />
                        <IconsHeartOutlined v-else />
                    </span>
                </div>

                <SeeDocumentDetails :id="currentCharacter.id" class="mt-auto" />
            </Card>
        </div>

        <Pagination v-if="!limit && data" :page="page" :total-pages="data.info.pages" />
    </section>
</template>
