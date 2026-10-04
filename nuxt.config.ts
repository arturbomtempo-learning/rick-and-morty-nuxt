export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    app: {
        head: {
            link: [
                { key: 'favicon', rel: 'icon', type: 'image/png', href: '/images/brand/logo.png' },
            ],
        },
    },
    modules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
    },
});
