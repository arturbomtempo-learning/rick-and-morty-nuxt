<script setup>
const props = defineProps({
    episode: Object,
});
</script>

<template>
    <Card class="justify-between min-h-[150px]">
        <div class="flex gap-2 items-center">
            <IconsPlay class="flex-[0_0_24px]" />
            <p>{{ episode.name }} | {{ episode.episode }}</p>
        </div>

        <div class="flex gap-2 items-center justify-between">
            <SeeDocumentDetails :id="episode.id" type="episode" class="my-auto" />
            <FavoriteButton type="episode" :id="episode.id" :size="32" />
        </div>
    </Card>
</template>
