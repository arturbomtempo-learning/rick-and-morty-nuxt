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
                <div class="flex flex-wrap gap-4 justify-center xl:justify-start">
                    <CharacterCard
                        v-for="currentCharacter of characters"
                        :key="currentCharacter.id"
                        :character="currentCharacter"
                    />
                </div>
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
                <div
                    class="flex gap-4 flex-wrap justify-center lg:grid lg:grid-cols-[repeat(4,1fr)]"
                >
                    <EpisodeCard
                        v-for="currentEpisode of episodes"
                        :key="currentEpisode.id"
                        :episode="currentEpisode"
                    />
                </div>
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
                <div
                    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 w-full"
                >
                    <LocationCard
                        v-for="currentLocation of locations"
                        :key="currentLocation.id"
                        :id="currentLocation.id"
                        :name="currentLocation.name"
                        :type="currentLocation.type"
                    />
                </div>
            </FavoritesSection>
        </PageContainer>
    </div>
</template>
