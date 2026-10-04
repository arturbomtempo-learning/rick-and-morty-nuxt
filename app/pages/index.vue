<script setup>
useHead({
    title: 'Rick and Morty API',
});
</script>

<template>
    <div class="flex flex-col gap-16">
        <HomeHeroHeader />

        <PageContainer class="flex flex-col gap-20 px-4 xl:px-0">
            <CharactersListing :limit="8" />
            <EpisodeListing :limit="4" />
            <LocationsListing :limit="7" />
        </PageContainer>
    </div>
</template>
