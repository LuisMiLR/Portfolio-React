export const getImageUrl = (path) => {
    return new URL (`àssets/${path}`, import.meta.url)
}