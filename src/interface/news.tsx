
export interface News {
    author: string,
    description: string,
    title: string,
    publishedAt: string,
    urlToImage: string,
    source: {
        id: any,
        name: string
    },
    content: string
};