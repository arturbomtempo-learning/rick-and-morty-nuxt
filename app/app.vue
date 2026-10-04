<script setup>
const { isDark } = useTheme();

useHead({
    htmlAttrs: { class: computed(() => (isDark.value ? 'dark' : 'light')) },
});
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
