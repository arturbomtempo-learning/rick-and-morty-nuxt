<template>
    <footer>
        <PageContainer class="flex flex-col px-4 xl:px-0">
            <div class="py-12 md:py-20 flex flex-wrap gap-6 justify-between items-center">
                <img src="/images/brand/logo.png" alt="Rick and Morty" width="165" height="48" />
                <BackToTop />
            </div>
            <div
                class="border-t-2 flex flex-col sm:flex-row gap-2 items-center justify-between py-6 text-center"
            >
                <p>&copy; {{ new Date().getFullYear() }}</p>

                <span class="flex items-center gap-2">
                    <IconsCode />

                    <p>
                        Desenvolvido por
                        <span class="text-primary font-bold">Artur Bomtempo</span>
                    </p>
                </span>
            </div>
        </PageContainer>
    </footer>
</template>
