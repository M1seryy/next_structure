export interface IBooksListItem {
    id: string;
    title: string;
    author?: string;
    coverUrl?: string;
    year?: number;
}

export interface IDoc {
    key?: string;
    title?: string;
    author_name?: string[];
    cover_i?: number;
    first_publish_year?: number;
}

// Open Library API interfaces
export interface IOpenLibraryAuthor {
    author: {
        key: string;
    };
    type: {
        key: string;
    };
}

export interface IOpenLibraryDescription {
    type: string;
    value: string;
}

export interface IOpenLibraryBook {
    key: string;
    title: string;
    authors?: IOpenLibraryAuthor[];
    description?: IOpenLibraryDescription;
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