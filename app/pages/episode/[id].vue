<script setup>
const route = useRoute();

const { id } = route.params;

const { data, error } = await useFetch(`https://rickandmortyapi.com/api/episode/${id}`);

if (error.value || !data.value) {
    const isNotFound = error.value?.statusCode === 404;

    throw createError({
        statusCode: isNotFound ? 404 : 503,
        statusMessage: isNotFound ? 'Not Found' : 'Service Unavailable',
        fatal: true,
    });
}

useHead({
    title: `${data.value.name} | Rick and Morty API`,
});

const airDateLabel = computed(() => {
    const airDate = new Date(data.value.air_date);

    if (Number.isNaN(airDate.getTime())) {
        return data.value.air_date;
    }

    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(airDate);
});

const charactersLabel = computed(() => {
    const total = data.value.characters.length;

    return total === 1 ? '1 Personagem neste episódio' : `${total} Personagens neste episódio`;
});
</script>

<template>
    <PageContainer class="flex flex-col gap-10 py-10 px-4 xl:px-0">
        <PageHeader />

        <section class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <IconsMonitorPlay :width="48" :height="48" />

                <div class="flex gap-6 items-center">
                    <h1 class="font-bold text-4xl lg:text-5xl">{{ data.name }}</h1>
                    <FavoriteButton type="episode" :id="data.id" />
                </div>
            </div>

            <div class="flex flex-wrap gap-6">
                <CharacterAttribute>
                    <template #icon><IconsPlay /></template>
                    {{ data.episode }}
                </CharacterAttribute>

                <CharacterAttribute>
                    <template #icon><IconsCalendarBlank /></template>
                    {{ airDateLabel }}
                </CharacterAttribute>
            </div>

            <CharacterAttribute>
                <template #icon><IconsSmiley /></template>
                {{ charactersLabel }}
            </CharacterAttribute>
        </section>
    </PageContainer>
</template>
