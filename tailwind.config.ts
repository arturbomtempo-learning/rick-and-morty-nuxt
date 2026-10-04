import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                background: 'rgb(var(--color-background) / <alpha-value>)',
                surface: 'rgb(var(--color-surface) / <alpha-value>)',
                hero: 'rgb(var(--color-hero) / <alpha-value>)',
                foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
            },
        },
    },
};
