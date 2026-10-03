<template>
    <div>
        <h1 class="text-purple-600">Hello, Nuxt.js!</h1>

        <div class="flex flex-wrap w-full max-w-[1224px] gap-4 mx-auto">
            <div v-for="currentCharacter of data.results">
                <img :src="currentCharacter.image" />
                <p>{{ currentCharacter.name }}</p>
                <p>{{ currentCharacter.status }}</p>
                <p>{{ currentCharacter.species }}</p>
                <p>{{ currentCharacter.origin.name }}</p>

                <NuxtLink :to="currentCharacter.url">Saiba Mais</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data, status, error, refresh, clear } = await useFetch('https://rickandmortyapi.com/api/character');
console.log(data.value)
</script>
