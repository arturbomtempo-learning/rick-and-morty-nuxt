<script setup>
const props = defineProps({
    type: String,
    id: Number,
    size: {
        type: Number,
        default: 40,
    },
});

const { isFavorite, toggleFavorite } = useFavorites();

const isFavorited = computed(() => isFavorite(props.type, props.id));

const label = computed(() =>
    isFavorited.value ? 'Remover dos favoritos' : 'Adicionar aos favoritos'
);
</script>

<template>
    <button
        type="button"
        :aria-pressed="isFavorited"
        :aria-label="label"
        :title="label"
        class="shrink-0 rounded-full transition-transform hover:scale-110 active:scale-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        @click="toggleFavorite(type, id)"
    >
        <IconsHeartFilled v-if="isFavorited" :width="size" :height="size" />
        <IconsHeartOutlined v-else :width="size" :height="size" />
    </button>
</template>
