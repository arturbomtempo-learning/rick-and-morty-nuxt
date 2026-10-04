<script setup>
useHead({
    title: 'Rick and Morty API',
});
</script>

<template>
    <div class="flex flex-col gap-16">
        <HomeHeroHeader />

        <PageContainer>
            <CharactersListing />
            <EpisodeListing />
        </PageContainer>
    </div>
</template>
