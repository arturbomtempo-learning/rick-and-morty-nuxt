<script setup>
const props = defineProps({
    characters: Array,
});
</script>

<template>
    <div
        class="grid w-full gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center"
    >
        <CharacterCard
            v-for="currentCharacter of characters"
            :key="currentCharacter.id"
            :character="currentCharacter"
        />
    </div>
</template>
