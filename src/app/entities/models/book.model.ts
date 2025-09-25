export type BooksListItem = {
    id: string;
    title: string;
    author?: string;
    coverUrl?: string;
    year?: number;
};

export type Doc = {
    key?: string;
    title?: string;
    author_name?: string[];
    cover_i?: number;
    first_publish_year?: number;
};