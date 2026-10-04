<template>
    <header class="bg-hero pt-10 md:pt-16 border-b border-primary transition-colors duration-300">
        <PageContainer class="flex flex-col gap-8 px-4 xl:px-0">
            <PageHeader />

            <div class="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-8">
                <div class="flex flex-col gap-4 self-start sm:self-center">
                    <IconsHeartOutlined :width="40" :height="40" />

                    <h1 class="font-bold text-4xl md:text-5xl leading-tight">
                        Todos os seus <br />
                        <span class="text-primary">favoritos.</span>
                    </h1>
                </div>

                <img
                    src="/images/characters/rick-and-morty-favorites.png"
                    alt=""
                    width="315"
                    height="453"
                    class="w-44 sm:w-56 md:w-[315px] h-auto"
                />
            </div>
        </PageContainer>
    </header>
</template>
