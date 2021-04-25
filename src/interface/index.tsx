
export interface NewsInterface {
    author: string,
    description: string,
    title: string,
    publishedAt: string,
    urlToImage: string,
    avatar?: string,   //author image icon
    pathname ?: string,
    source: {
        id: any,
        name: string
    },
    url ?: string,
    action ?: any,    //A reactnode that brings the control back to the home page.
    content: string
};