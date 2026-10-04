<script setup>
const props = defineProps({
    name: String,
    url: String,
});

const { data: location } = await useFetch(props.url, { immediate: Boolean(props.url) });
</script>

<template>
    <Card class="items-center text-center">
        <slot name="icon" />

        <div class="flex flex-col gap-1 text-sm">
            <p v-if="location">{{ location.type }}</p>
            <p class="text-[#11b0c8]">{{ name }}</p>
        </div>

        <div v-if="location" class="flex justify-center">
            <SeeDocumentDetails :id="location.id" type="location" />
        </div>

        <IconsHeartFilled :width="24" :height="24" />
    </Card>
</template>
