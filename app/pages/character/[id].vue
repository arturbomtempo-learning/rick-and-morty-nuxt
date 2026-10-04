<script setup>
const route = useRoute();

const { id } = route.params;

const { data } = await useFetch(`https://rickandmortyapi.com/api/character/${id}`);

useHead({
    title: `${data.value.name} | Rick and Morty API`,
    link: [{ rel: 'icon', type: 'image/x-icon', href: data.value.image }],
});

const statusByValue = {
    Alive: { label: 'Vivo', color: '#a3e635' },
    Dead: { label: 'Morto', color: '#ef4444' },
};

const status = computed(
    () => statusByValue[data.value.status] ?? { label: 'Desconhecido', color: '#9ca3af' }
);
</script>

<template>
    <PageContainer class="flex flex-col gap-10 py-10 px-4">
        <PageHeader />

        <section class="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-stretch">
            <img
                :src="data.image"
                width="340"
                height="425"
                class="w-full max-w-[340px] aspect-[4/5] object-cover rounded-2xl"
            />

            <div class="flex flex-col gap-8 flex-1 w-full">
                <div class="flex gap-6 items-center">
                    <h1 class="font-bold text-4xl lg:text-5xl">{{ data.name }}</h1>
                    <IconsHeartOutlined :width="40" :height="40" />
                </div>

                <CharacterAttribute>
                    <template #icon><IconsMonitorPlay /></template>
                    Participou de {{ data.episode.length }} episódios
                </CharacterAttribute>

                <div class="flex flex-wrap gap-6">
                    <CharacterAttribute>
                        <template #icon><IconsPulse :color="status.color" /></template>
                        {{ status.label }}
                    </CharacterAttribute>

                    <CharacterAttribute>
                        <template #icon><IconsAlien /></template>
                        {{ data.species }}
                    </CharacterAttribute>

                    <CharacterAttribute>
                        <template #icon>
                            <IconsGenderMale v-if="data.gender === 'Male'" />
                            <IconsGenderFemale v-else-if="data.gender === 'Female'" />
                            <IconsGenderNeuter v-else-if="data.gender === 'Genderless'" />
                            <IconsQuestion v-else />
                        </template>
                        {{ data.gender }}
                    </CharacterAttribute>
                </div>

                <div class="grid grid-cols-2 gap-4 w-full max-w-[300px] mt-auto md:self-end">
                    <LocationCard :name="data.origin.name" :url="data.origin.url">
                        <template #icon><IconsPlanet :width="32" :height="32" /></template>
                    </LocationCard>

                    <LocationCard :name="data.location.name" :url="data.location.url">
                        <template #icon><IconsMapPin :width="32" :height="32" /></template>
                    </LocationCard>
                </div>
            </div>
        </section>
    </PageContainer>
</template>
