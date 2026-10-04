export type Theme = 'dark' | 'light';

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

export function useTheme() {
    const themeCookie = useCookie<Theme>('theme', {
        maxAge: ONE_YEAR_IN_SECONDS,
        sameSite: 'lax',
    });

    const theme = useState<Theme>('theme', () =>
        themeCookie.value === 'light' ? 'light' : 'dark'
    );

    const isDark = computed(() => theme.value === 'dark');

    function setTheme(value: Theme) {
        theme.value = value;
        themeCookie.value = value;
    }

    return { theme, isDark, setTheme };
}
