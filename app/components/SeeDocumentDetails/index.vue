<script setup>
const props = defineProps({
    id: Number,
    type: {
        type: String,
        default: 'character',
    },
    size: {
        type: String,
        default: 'md',
    },
});

const urlToRedirect = computed(() => `/${props.type}/${props.id}`);
</script>

<template>
    <NuxtLink
        :to="urlToRedirect"
        class="self-end bg-primary text-white flex rounded-[32px] items-center whitespace-nowrap"
        :class="size === 'sm' ? 'gap-1 py-1 px-2 text-xs' : 'gap-2 py-2 px-3 text-sm'"
    >
        <IconsInfo :width="size === 'sm' ? 14 : 20" :height="size === 'sm' ? 14 : 20" />
        Saiba Mais
    </NuxtLink>
</template>
