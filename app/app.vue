<template>
    <div class="text-white">
        <h1 class="text-purple-600">Hello, Nuxt.js!</h1>

        <div class="flex flex-wrap w-full max-w-[1224px] gap-4 mx-auto">
            <div
                v-for="currentCharacter of data.results"
                class="bg-[#313234] rounded-lg flex gap-4 flex-col p-4"
            >
                <img :src="currentCharacter.image" width="262" height="200" class="rounded-2xl" />

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
                        <svg
                            width="42"
                            height="36"
                            viewBox="0 0 42 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M42 11.625C42 24.75 22.5394 35.3737 21.7106 35.8125C21.4922 35.93 21.248 35.9915 21 35.9915C20.752 35.9915 20.5078 35.93 20.2894 35.8125C19.4606 35.3737 0 24.75 0 11.625C0.00347388 8.54292 1.22936 5.58808 3.40872 3.40872C5.58808 1.22936 8.54292 0.00347388 11.625 0C15.4969 0 18.8869 1.665 21 4.47937C23.1131 1.665 26.5031 0 30.375 0C33.4571 0.00347388 36.4119 1.22936 38.5913 3.40872C40.7706 5.58808 41.9965 8.54292 42 11.625Z"
                                fill="#11B0C8"
                            />
                        </svg>
                    </span>
                </div>

                <NuxtLink :to="currentCharacter.url" class="mt-2">Saiba Mais</NuxtLink>
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
