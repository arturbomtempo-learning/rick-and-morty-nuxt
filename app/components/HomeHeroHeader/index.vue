<script setup>
const { isDark } = useTheme();

const highlightImage = computed(() =>
    isDark.value
        ? { src: '/images/characters/rick-sanchez-highlight.png', width: 774, height: 434 }
        : { src: '/images/characters/rick-and-morty-highlight.png', width: 435, height: 436 }
);
</script>

<template>
    <header
        class="bg-hero pt-16 border-b border-primary dark:border-transparent transition-colors duration-300"
    >
        <PageContainer class="flex flex-col gap-5">
            <img src="/images/brand/logo.png" width="220" height="64" />

            <div class="flex gap-16 justify-between">
                <div class="flex flex-col gap-6 h-fit self-center">
                    <h1 class="font-bold text-5xl">
                        Saiba tudo em um só <span class="text-primary">lugar</span>.
                    </h1>

                    <p>Personagens. localizações, episódios e muito mais.</p>

                    <ThemeToggle class="mt-4" />

                    <p class="text-primary">
                        {{
                            isDark
                                ? 'Ai sim, Porr#@%&*'
                                : 'Wubba Lubba Dub Dub! Cuidado com os olhos.'
                        }}
                    </p>
                </div>

                <img
                    :src="highlightImage.src"
                    :width="highlightImage.width"
                    :height="highlightImage.height"
                    class="self-end"
                />
            </div>
        </PageContainer>
    </header>
</template>
