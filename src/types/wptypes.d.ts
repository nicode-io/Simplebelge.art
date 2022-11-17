type tWpPost = {
    author: number;
    categories: number[];
    comment_status: string;
    content: {
        rendered: string;
        protected: false;
    }
    date: string;
    date_gmt: string;
    excerpt: {
        rendered: string;
        protected: false;
    }
    featured_media: number;
    format: string;
    guid: {
        rendered: string;
    }
    id: number;
    link: string;
    meta: []
    modified: string;
    modified_gmt: string;
    ping_status: string;
    slug: string;
    status: string;
    sticky: boolean;
    tags: []
    template: string;
    title: {
        rendered: string;
    }
    type: string;
}

type tWpBook = {}
