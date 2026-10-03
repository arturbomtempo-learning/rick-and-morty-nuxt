<template>
    <div class="text-white">
        <h1 class="text-purple-600">Hello, Nuxt.js!</h1>

        <div class="flex flex-wrap w-full max-w-[1224px] gap-4 mx-auto">
            <div
                v-for="currentCharacter of data.results"
                class="bg-[#313234] rounded-lg flex gap-4 flex-col p-4 w-full max-w-[294px]"
            >
                <img
                    :src="currentCharacter.image"
                    width="262"
                    height="200"
                    class="rounded-2xl h-[200px] object-cover"
                />

                <div class="grid grid-cols-[1fr,48px]">
                    <div class="flex flex-col gap-4">
                        <p class="text-base font-bold">{{ currentCharacter.name }}</p>

                        <div class="flex flex-col gap-2">
                            <p>{{ currentCharacter.status === 'Alive' ? 'Vivo' : 'Morto' }}</p>
                            <p>{{ currentCharacter.species }}</p>
                            <p>{{ currentCharacter.origin.name }}</p>
                        </div>
                    </div>

                    <span>
                        <IconsHeartFilled v-if="currentCharacter.status === 'Alive'" />
                        <IconsHeartOutlined v-else />
                    </span>
                </div>

                <NuxtLink
                    :to="currentCharacter.url"
                    class="mt-auto self-end bg-[#11b0c8] flex gap-2 py-2 px-3 rounded-[32px] text-sm items-center"
                    target="_blank"
                >
                    <IconsInfo />
                    Saiba Mais
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch(
    'https://rickandmortyapi.com/api/character'
);
console.log(data.value);
</script>
