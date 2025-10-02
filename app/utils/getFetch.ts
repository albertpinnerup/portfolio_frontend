export const getFetch = async (query: string) => {
    const GRAPH_URL =
        process.env.NODE_ENV === 'production'
            ? 'https://cms.albertpinnerup.dev/graphql'
            : 'http://localhost:1337/graphql';

    const res = await fetch(GRAPH_URL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    return res.json();
};
