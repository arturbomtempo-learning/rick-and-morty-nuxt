import type { FavoriteType } from './useFavorites';

export function useFavoriteItems<T extends { id: number }>(type: FavoriteType) {
    const { favorites, isLoaded } = useFavorites();

    const fetchedItems = ref<T[]>([]) as Ref<T[]>;
    const isFetching = ref(false);
    const hasError = ref(false);

    const ids = computed(() => favorites.value[type]);

    // Mais recentes primeiro; itens desfavoritados somem na hora, sem nova requisição.
    const items = computed(() =>
        [...ids.value]
            .reverse()
            .map((id) => fetchedItems.value.find((item) => item.id === id))
            .filter((item): item is T => Boolean(item))
    );

    watch(
        ids,
        async (currentIds) => {
            const missingIds = currentIds.filter(
                (id) => !fetchedItems.value.some((item) => item.id === id)
            );

            if (!missingIds.length) {
                return;
            }

            isFetching.value = true;
            hasError.value = false;

            try {
                const result = await $fetch<T[]>(
                    `https://rickandmortyapi.com/api/${type}/[${missingIds.join(',')}]`
                );

                fetchedItems.value = [...fetchedItems.value, ...result];
            } catch {
                hasError.value = true;
            } finally {
                isFetching.value = false;
            }
        },
        { immediate: true }
    );

    const isLoading = computed(() => !isLoaded.value || isFetching.value);

    return { items, isLoading, hasError };
}
