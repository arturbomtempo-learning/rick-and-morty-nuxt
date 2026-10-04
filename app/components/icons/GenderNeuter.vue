<script setup lang="ts">
const {
    width = 24,
    height = 24,
    color = 'currentColor',
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
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M208,104a80,80,0,1,0-88,79.6V232a8,8,0,0,0,16,0V183.6A80.11,80.11,0,0,0,208,104Zm-80,64a64,64,0,1,1,64-64A64.07,64.07,0,0,1,128,168Z"
            :fill="color"
        />
    </svg>
</template>
