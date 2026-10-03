<script setup>
const { data } = await useFetch('https://rickandmortyapi.com/api/episode');
</script>

<template>
    <section>
        <Card v-for="currentEpisode of data.results">
            <p>{{ currentEpisode.name }} | {{ currentEpisode.episode }}</p>
        </Card>
    </section>
</template>
