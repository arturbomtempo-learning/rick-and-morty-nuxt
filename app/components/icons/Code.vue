<script setup lang="ts">
const {
    width = 24,
    height = 24,
    color = '#11b0c8',
} = defineProps<{
    width?: number;
    height?: number;
    color?: string;
}>();
</script>

<template>
    <svg
        :width="width"
        :height="height"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M16 18L22 12L16 6"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M8 6L2 12L8 18"
            :stroke="color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
</template>
