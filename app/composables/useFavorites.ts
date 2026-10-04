export type FavoriteType = 'character' | 'episode' | 'location';

type Favorites = Record<FavoriteType, number[]>;

export const FAVORITES_STORAGE_KEY = 'rick-and-morty:favorites';

const FAVORITE_TYPES: FavoriteType[] = ['character', 'episode', 'location'];

function createEmptyFavorites(): Favorites {
    return { character: [], episode: [], location: [] };
}

function readFavoritesFromStorage(): Favorites {
    const favorites = createEmptyFavorites();

    try {
        const stored = JSON.parse(localStorage.getItem(FAVORITES_STORAGE_KEY) ?? '{}');

        for (const type of FAVORITE_TYPES) {
            if (Array.isArray(stored[type])) {
                favorites[type] = stored[type].filter(Number.isInteger);
            }
        }
    } catch {}

    return favorites;
}

function writeFavoritesToStorage(favorites: Favorites) {
    try {
        localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favorites));
    } catch {
        // Storage indisponível (ex.: navegação privada): mantém só em memória.
    }
}

export function useFavorites() {
    const favorites = useState<Favorites>('favorites', createEmptyFavorites);
    const isLoaded = useState('favorites-loaded', () => false);

    function loadFavorites() {
        favorites.value = readFavoritesFromStorage();
        isLoaded.value = true;
    }

    function isFavorite(type: FavoriteType, id: number) {
        return favorites.value[type].includes(id);
    }

    function toggleFavorite(type: FavoriteType, id: number) {
        const ids = favorites.value[type];

        favorites.value = {
            ...favorites.value,
            [type]: ids.includes(id) ? ids.filter((favoriteId) => favoriteId !== id) : [...ids, id],
        };

        writeFavoritesToStorage(favorites.value);
    }

    return { favorites, isLoaded, loadFavorites, isFavorite, toggleFavorite };
}
