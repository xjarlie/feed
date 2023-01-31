interface FeedItem {
    id: string, // UUID
    type: 'post' | 'link',
    title: string,
    external?: boolean
}

interface Post extends FeedItem {
    type: 'post',
    subtitle?: string,
    content: string,
    author: string,
}

interface Link extends FeedItem {
    type: 'link',
    external: boolean,
    url: string
}