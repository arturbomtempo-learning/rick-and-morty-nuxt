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
        class="bg-hero pt-10 md:pt-16 border-b border-primary dark:border-transparent transition-colors duration-300"
    >
        <PageContainer class="flex flex-col gap-8 px-4 xl:px-0">
            <PageHeader />

            <div class="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">
                <div class="flex flex-col gap-6 self-start lg:self-center lg:pb-16">
                    <h1 class="font-bold text-4xl md:text-5xl leading-tight">
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
                    alt=""
                    :width="highlightImage.width"
                    :height="highlightImage.height"
                    class="w-full h-auto"
                    :style="{ maxWidth: `${highlightImage.width}px` }"
                />
            </div>
        </PageContainer>
    </header>
</template>
