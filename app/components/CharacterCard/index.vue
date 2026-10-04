<script setup>
const props = defineProps({
    character: Object,
});

const status = computed(() => getCharacterStatus(props.character.status));
</script>

<template>
    <Card class="max-w-[294px]">
        <img
            :src="character.image"
            :alt="character.name"
            width="262"
            height="200"
            class="rounded-2xl w-full h-[200px] object-cover"
        />

        <div class="grid grid-cols-[1fr,48px]">
            <div class="flex flex-col gap-4">
                <p class="text-base font-bold">{{ character.name }}</p>

                <div class="flex flex-col gap-2">
                    <p class="flex gap-2 items-center">
                        <IconsPulse :width="16" :height="16" :color="status.color" />
                        {{ status.label }}
                    </p>
                    <p class="flex gap-2 items-center">
                        <IconsAlien :width="16" :height="16" />
                        {{ character.species }}
                    </p>
                    <p class="flex gap-2 items-center">
                        <IconsPlanet :width="16" :height="16" />
                        {{ character.origin.name }}
                    </p>
                </div>
            </div>

            <FavoriteButton type="character" :id="character.id" class="self-start" />
        </div>

        <SeeDocumentDetails :id="character.id" class="mt-auto" />
    </Card>
</template>
