<template>
    <header class="flex justify-between items-center gap-4">
        <NuxtLink to="/">
            <img src="/images/brand/logo.png" width="165" height="48" />
        </NuxtLink>

        <button
            class="flex gap-2 items-center py-2 px-3 bg-primary text-white rounded-[32px] text-sm"
        >
            <IconsHeartOutlined :width="20" :height="20" color="#fff" />
            Lista de favoritos
        </button>
    </header>
</template>
