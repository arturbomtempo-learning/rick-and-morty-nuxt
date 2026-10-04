<script setup>
const props = defineProps({
    error: Object,
});

const isNotFound = computed(() => props.error?.statusCode === 404);

useHead({
    title: `${isNotFound.value ? 'Página não encontrada' : 'Algo deu errado'} | Rick and Morty API`,
});
</script>

<template>
    <NuxtLayout>
        <PageContainer class="flex flex-col gap-16 py-10 px-4 xl:px-0">
            <PageHeader />

            <section class="flex flex-col gap-6 items-center text-center py-16">
                <p class="text-primary font-bold text-6xl">{{ error?.statusCode }}</p>

                <h1 class="font-bold text-3xl md:text-4xl">
                    {{
                        isNotFound
                            ? 'Essa página sumiu em outra dimensão.'
                            : 'Algo deu errado por aqui.'
                    }}
                </h1>

                <p class="opacity-70">
                    {{
                        isNotFound
                            ? 'O conteúdo que você procura não existe ou foi removido.'
                            : 'Não conseguimos carregar os dados agora. Tente novamente em alguns instantes.'
                    }}
                </p>

                <button
                    type="button"
                    class="py-2 px-4 bg-primary text-white rounded-[32px]"
                    @click="clearError({ redirect: '/' })"
                >
                    Voltar para o início
                </button>
            </section>
        </PageContainer>
    </NuxtLayout>
</template>
