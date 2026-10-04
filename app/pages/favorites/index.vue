<script setup>
useHead({
    title: 'Favoritos | Rick and Morty API',
});

const selectedType = ref(null);

const {
    items: characters,
    isLoading: isLoadingCharacters,
    hasError: hasCharactersError,
} = useFavoriteItems('character');

const {
    items: episodes,
    isLoading: isLoadingEpisodes,
    hasError: hasEpisodesError,
} = useFavoriteItems('episode');

const {
    items: locations,
    isLoading: isLoadingLocations,
    hasError: hasLocationsError,
} = useFavoriteItems('location');

function isVisible(type) {
    return !selectedType.value || selectedType.value === type;
}
</script>

<template>
    <div class="flex flex-col gap-10 md:gap-16">
        <FavoritesHeroHeader />

        <PageContainer class="flex flex-col gap-16 md:gap-20 px-4 xl:px-0">
            <FavoritesFilter v-model="selectedType" />

            <FavoritesSection
                v-if="isVisible('character')"
                title="Personagens"
                see-all-url="/character"
                :is-loading="isLoadingCharacters"
                :has-error="hasCharactersError"
                :is-empty="!characters.length"
                empty-message="Você ainda não favoritou nenhum personagem."
            >
                <CharactersGrid :characters="characters" />
            </FavoritesSection>

            <FavoritesSection
                v-if="isVisible('episode')"
                title="Episódios"
                see-all-url="/episode"
                :is-loading="isLoadingEpisodes"
                :has-error="hasEpisodesError"
                :is-empty="!episodes.length"
                empty-message="Você ainda não favoritou nenhum episódio."
            >
                <EpisodesGrid :episodes="episodes" />
            </FavoritesSection>

            <FavoritesSection
                v-if="isVisible('location')"
                title="Localizações"
                see-all-url="/location"
                :is-loading="isLoadingLocations"
                :has-error="hasLocationsError"
                :is-empty="!locations.length"
                empty-message="Você ainda não favoritou nenhuma localização."
            >
                <LocationsGrid :locations="locations" />
            </FavoritesSection>
        </PageContainer>
    </div>
</template>
