<script setup></script>

<template>
    <footer class="flex flex-col">
        <div class="py-20 flex justify-between items-center">
            <img src="/images/brand/logo.png" />
            <BackToTop />
        </div>
        <div class="border-t-2 flex justify-between py-6">
            <p>&copy; {{ new Date().getFullYear() }}</p>

            <span class="flex items-center gap-2">
                <IconsCode />

                <p>
                    Desenvolvido por
                    <span class="text-[#11b0c8] font-bold">Artur Bomtempo</span>
                </p>
            </span>
        </div>
    </footer>
</template>
