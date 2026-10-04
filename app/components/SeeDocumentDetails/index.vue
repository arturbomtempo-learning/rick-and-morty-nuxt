<script setup>
const props = defineProps({
    id: String,
    type: {
        type: String,
        default: 'character',
    },
});

const urlToRedirect = computed(() => {
    if (props.type === 'character') {
        return `/character/${props.id}`;
    }

    return `/episode/${props.id}`;
});
</script>

<template>
    <NuxtLink
        :to="urlToRedirect"
        class="self-end bg-[#11b0c8] flex gap-2 py-2 px-3 rounded-[32px] text-sm items-center"
    >
        <IconsInfo />
        Saiba Mais
    </NuxtLink>
</template>
