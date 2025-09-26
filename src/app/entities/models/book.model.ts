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

// Open Library API interfaces
export interface OpenLibraryAuthor {
    author: {
        key: string;
    };
    type: {
        key: string;
    };
}

export interface OpenLibraryDescription {
    type: string;
    value: string;
}

export interface OpenLibraryBook {
    key: string;
    title: string;
    authors?: OpenLibraryAuthor[];
    description?: OpenLibraryDescription;
    subjects?: string[];
    first_publish_date?: string;
    covers?: number[];
    type: {
        key: string;
    };
    latest_revision: number;
    revision: number;
    created: {
        type: string;
        value: string;
    };
    last_modified: {
        type: string;
        value: string;
    };
}