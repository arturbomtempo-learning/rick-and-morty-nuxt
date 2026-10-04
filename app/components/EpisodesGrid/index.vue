<script setup>
const props = defineProps({
    episodes: Array,
});
</script>

<template>
    <div class="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <EpisodeCard
            v-for="currentEpisode of episodes"
            :key="currentEpisode.id"
            :episode="currentEpisode"
        />
    </div>
</template>
