<script setup>
function scrollToTop() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
}
</script>

<template>
    <button type="button" class="flex gap-2 items-center" @click="scrollToTop">
        <span>Voltar ao topo</span>

        <IconsCircleArrowUp />
    </button>
</template>
