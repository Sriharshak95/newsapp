
export interface NewsInterface {
    author: string,
    description: string,
    title: string,
    publishedAt: string,
    urlToImage: string,
    avatar?: string,
    pathname ?: string,
    source: {
        id: any,
        name: string
    },
    action ?: any
    content: string
};