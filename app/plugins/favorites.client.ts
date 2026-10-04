export default defineNuxtPlugin(() => {
    const { loadFavorites } = useFavorites();

    // Carrega só depois que toda a página foi hidratada, para o HTML do servidor e do cliente baterem.
    onNuxtReady(loadFavorites);

    // Mantém várias abas abertas sincronizadas.
    window.addEventListener('storage', (event) => {
        if (event.key === FAVORITES_STORAGE_KEY) {
            loadFavorites();
        }
    });
});
