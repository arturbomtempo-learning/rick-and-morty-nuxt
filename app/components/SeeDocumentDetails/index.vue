<template>
    <NuxtLink
        :to="actionUrl"
        class="mt-auto self-end bg-[#11b0c8] flex gap-2 py-2 px-3 rounded-[32px] text-sm items-center"
        target="_blank"
    >
        <IconsInfo />
        Saiba Mais
    </NuxtLink>
</template>

<script setup>
const props = defineProps({
    actionUrl: String,
});
</script>
