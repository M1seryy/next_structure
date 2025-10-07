'use client'

import mixpanel from 'mixpanel-browser'

interface ISortingProps {
    previous_sort?: string
    timestamp?: string
}

interface IBookClickProps {
    author?: string
    year?: number
    has_cover?: boolean
}

export const mixpanelUtils = {
    trackSorting: (sortType: 'default' | 'newest' | 'oldest', props?: ISortingProps) => {
        if (mixpanel.track) {
            mixpanel.track('Sorting Changed', {
                sort_type: sortType,
                ...props,
            })
        }
    },

    trackBookClick: (bookId: string, bookTitle: string, props?: IBookClickProps) => {
        if (mixpanel.track) {
            mixpanel.track('Book Clicked', {
                book_id: bookId,
                book_title: bookTitle,
                ...props,
            })
        }
    },
}
