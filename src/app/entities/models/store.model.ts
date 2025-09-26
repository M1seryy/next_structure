// Books sort store state interface
export interface IBooksSortState {
    sortOrder: 'newest' | 'oldest' | 'default'
}

// Books sort store actions interface
export interface IBooksSortStore extends IBooksSortState {
    setSortOrder: (order: 'newest' | 'oldest' | 'default') => void
}
