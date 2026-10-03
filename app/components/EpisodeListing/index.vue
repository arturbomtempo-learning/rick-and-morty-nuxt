<script setup>
const { data } = await useFetch('https://rickandmortyapi.com/api/episode');
</script>

<template>
    <section class="flex flex-col gap-8">
        <ListingHeader title="Episódios" />

        <div class="flex gap-4 flex-wrap">
            <Card v-for="currentEpisode of data.results" class="flex flex-col gap-2">
                <div class="flex gap-2 items-center">
                    <IconsPlay />
                    <p>{{ currentEpisode.name }} | {{ currentEpisode.episode }}</p>
                </div>

                <div class="flex items-center justify-between">
                    <SeeDocumentDetails class="my-auto" />
                    <IconsHeartFilled />
                </div>
            </Card>
        </div>
    </section>
</template>
