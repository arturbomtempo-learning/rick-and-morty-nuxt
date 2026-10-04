<script setup>
const route = useRoute();

const { id } = route.params;

const { data } = await useFetch(`https://rickandmortyapi.com/api/location/${id}`);

useHead({
    title: `${data.value.name} | Rick and Morty API`,
});

const residentsLabel = computed(() => {
    const total = data.value.residents.length;

    return total === 1 ? '1 Personagem localizado aqui' : `${total} Personagens localizados aqui`;
});
</script>

<template>
    <PageContainer class="flex flex-col gap-10 py-10 px-4">
        <PageHeader />

        <section class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <IconsPlanet :width="48" :height="48" />

                <div class="flex gap-6 items-center">
                    <h1 class="font-bold text-4xl lg:text-5xl">{{ data.name }}</h1>
                    <FavoriteButton type="location" :id="data.id" />
                </div>
            </div>

            <div class="flex flex-wrap gap-6">
                <CharacterAttribute>
                    <template #icon><IconsPlanet /></template>
                    {{ data.type || 'Desconhecido' }}
                </CharacterAttribute>

                <CharacterAttribute>
                    <template #icon><IconsScan /></template>
                    {{ data.dimension }}
                </CharacterAttribute>
            </div>

            <CharacterAttribute>
                <template #icon><IconsSmiley /></template>
                {{ residentsLabel }}
            </CharacterAttribute>
        </section>
    </PageContainer>
</template>
