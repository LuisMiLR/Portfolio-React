export const getImageUrl = (path) => {
    return new URL (`ssets/${path}`, import.meta.url).href;
};