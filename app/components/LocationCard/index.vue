<script setup>
const props = defineProps({
    name: String,
    url: String,
});

const { data: location } = await useFetch(props.url, { immediate: Boolean(props.url) });
</script>

<template>
    <Card>
        <div class="flex flex-col gap-2 items-center text-center text-xs h-full">
            <slot name="icon" />

            <div class="flex flex-col gap-1">
                <p v-if="location">{{ location.type }}</p>
                <p class="text-[#11b0c8]">{{ name }}</p>
            </div>

            <div v-if="url" class="mt-auto">
                <SeeDocumentDetails :url="url" size="sm" />
            </div>

            <IconsHeartFilled :width="20" :height="20" />
        </div>
    </Card>
</template>
