<script setup>
const props = defineProps({
    id: Number,
    name: String,
    type: String,
});
</script>

<template>
    <Card>
        <div class="flex flex-col gap-2 items-center text-center text-xs h-full">
            <slot name="icon">
                <IconsPlanet :width="32" :height="32" />
            </slot>

            <div class="flex flex-col gap-1">
                <p v-if="type">{{ type }}</p>
                <p class="text-primary">{{ name }}</p>
            </div>

            <div v-if="id" class="mt-auto">
                <SeeDocumentDetails :id="id" type="location" size="sm" />
            </div>

            <IconsHeartFilled :width="20" :height="20" />
        </div>
    </Card>
</template>
