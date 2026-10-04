<script setup>
const { theme, setTheme } = useTheme();

const themeOptions = [
    { value: 'dark', label: 'Escuro' },
    { value: 'light', label: 'Claro' },
];
</script>

<template>
    <div class="flex gap-2" role="group" aria-label="Tema">
        <button
            v-for="option of themeOptions"
            :key="option.value"
            type="button"
            :aria-pressed="theme === option.value"
            class="flex gap-2 items-center py-1 px-3 rounded-[32px] text-sm transition-colors"
            :class="theme === option.value ? 'bg-primary text-white' : 'dark:bg-surface'"
            @click="setTheme(option.value)"
        >
            <IconsMoon v-if="option.value === 'dark'" :width="18" :height="18" />
            <IconsSun v-else :width="18" :height="18" />
            {{ option.label }}
        </button>
    </div>
</template>
