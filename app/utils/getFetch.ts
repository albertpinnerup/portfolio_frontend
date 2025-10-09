const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export const getFetch = async (query: string, variable?: Record<string, any>) => {
    const GRAPH_URL =
        process.env.NODE_ENV === 'production'
            ? `${STRAPI_URL}/graphql`
            : 'http://localhost:1337/graphql';

    const res = await fetch(GRAPH_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ query, variables: { ...variable } }),
        next: { revalidate: 3600, tags: ['strapi'] },
    });

    return res.json();
};
