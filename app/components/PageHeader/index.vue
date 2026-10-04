<template>
    <nav class="flex justify-between items-center gap-4">
        <NuxtLink to="/" aria-label="Página inicial">
            <img src="/images/brand/logo.png" alt="Rick and Morty" width="165" height="48" />
        </NuxtLink>

        <NuxtLink
            to="/favorites"
            class="flex gap-2 items-center py-2 px-3 bg-primary text-white rounded-[32px] text-sm whitespace-nowrap"
        >
            <IconsHeartOutlined :width="20" :height="20" color="#fff" />
            Lista de favoritos
        </NuxtLink>
    </nav>
</template>
