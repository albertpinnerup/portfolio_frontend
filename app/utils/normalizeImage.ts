export const normalizeMedia = (url?: string) => {
    const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

    return url ? (url.startsWith('http') ? url : `${STRAPI_URL ?? ''}${url}`) : '';
};
