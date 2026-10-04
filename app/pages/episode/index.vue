<script setup>
definePageMeta({
    scrollToTop: true,
});

useHead({
    title: 'Episódios | Rick and Morty API',
});

const route = useRoute();

const page = computed(() => Number(route.query.page) || 1);
</script>

<template>
    <PageContainer class="flex flex-col gap-10 py-10 px-4 xl:px-0">
        <PageHeader />

        <EpisodeListing :page="page" />
    </PageContainer>
</template>
