<script setup>
const selectedType = defineModel({ type: String, default: null });

const filterOptions = [
    { value: 'character', label: 'Personagens' },
    { value: 'location', label: 'Localizações' },
    { value: 'episode', label: 'Episódios' },
];

function toggleFilter(value) {
    selectedType.value = selectedType.value === value ? null : value;
}
</script>

<template>
    <div
        class="flex flex-wrap gap-2 items-center justify-center sm:justify-end"
        role="group"
        aria-label="Filtrar favoritos"
    >
        <span class="text-sm w-full text-center sm:w-auto">Filtrar por:</span>

        <button
            v-for="option of filterOptions"
            :key="option.value"
            type="button"
            :aria-pressed="selectedType === option.value"
            class="flex gap-2 items-center py-1 px-3 rounded-[32px] text-sm transition-colors"
            :class="selectedType === option.value ? 'bg-primary text-white' : 'dark:bg-surface'"
            @click="toggleFilter(option.value)"
        >
            <IconsSmiley v-if="option.value === 'character'" :width="18" :height="18" />
            <IconsPlanet v-else-if="option.value === 'location'" :width="18" :height="18" />
            <IconsMonitorPlay v-else :width="18" :height="18" />
            {{ option.label }}
        </button>
    </div>
</template>
