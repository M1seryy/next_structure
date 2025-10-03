// Sort order enum
export enum SortOrder {
    DEFAULT = 'default',
    NEWEST = 'newest',
    OLDEST = 'oldest'
}

// Books sort store state 
export interface IBooksSortState {
    sortOrder: SortOrder
    filters: Record<string, any>
}

// Books sort 
export interface IBooksSortStore extends IBooksSortState {
    updateState: (updates: Partial<IBooksSortState>) => void
}
