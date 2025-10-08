import { useQuery } from '@tanstack/react-query'

import { fetchBookByWorkId, searchBooksByTitle } from './books.api'

// query keys
export const booksQueryKeys = {
    all: ['books'] as const,
    byWorkId: (workId: string) => [...booksQueryKeys.all, 'work', workId] as const,
    search: (title: string) => [...booksQueryKeys.all, 'search', title] as const,
}


export const booksListQueryOptions = (q: string) => ({
    queryKey: ['books', q],
    queryFn: () => searchBooksByTitle(q),
    staleTime: 30_000,
    gcTime: 5 * 60 * 1000,

})


export const useBookByWorkId = (workId: string) => {
    return useQuery({
        queryKey: booksQueryKeys.byWorkId(workId),
        queryFn: () => fetchBookByWorkId(workId),
        enabled: !!workId,
        staleTime: 30_000,
        gcTime: 5 * 60 * 1000,

    })
}

export const useSearchBooks = (query: string) => {
    return useQuery(booksListQueryOptions(query))
}


