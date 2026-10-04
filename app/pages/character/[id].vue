<script setup>
const route = useRoute();

const { id } = route.params;

const { data } = await useFetch(`https://rickandmortyapi.com/api/character/${id}`);

useHead({
    title: `${data.value.name} | Rick and Morty API`,
    link: [{ rel: 'icon', type: 'image/x-icon', href: data.value.image }],
});

const status = computed(() => getCharacterStatus(data.value.status));

const { data: origin } = await useFetch(data.value.origin.url, {
    immediate: Boolean(data.value.origin.url),
});

const { data: currentLocation } = await useFetch(data.value.location.url, {
    immediate: Boolean(data.value.location.url),
});
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
                    <FavoriteButton type="character" :id="data.id" />
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
                    <LocationCard :id="origin?.id" :name="data.origin.name" :type="origin?.type">
                        <template #icon><IconsPlanet :width="32" :height="32" /></template>
                    </LocationCard>

                    <LocationCard
                        :id="currentLocation?.id"
                        :name="data.location.name"
                        :type="currentLocation?.type"
                    >
                        <template #icon><IconsMapPin :width="32" :height="32" /></template>
                    </LocationCard>
                </div>
            </div>
        </section>
    </PageContainer>
</template>
