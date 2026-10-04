<script setup>
const { isDark } = useTheme();

useHead({
    htmlAttrs: {
        lang: 'pt-BR',
        class: computed(() => (isDark.value ? 'dark' : 'light')),
    },
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
