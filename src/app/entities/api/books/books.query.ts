import { useQuery } from '@tanstack/react-query'

import { fetchBookByWorkId, searchBooksByTitle } from './books.api'

// query keys
export const booksQueryKeys = {
    all: ['books'] as const,
    byWorkId: (workId: string) => [...booksQueryKeys.all, 'work', workId] as const,
    search: (title: string) => [...booksQueryKeys.all, 'search', title] as const,
}

// query options
export const booksListQueryOptions = (q: string) => ({
    queryKey: ['books', q],
    queryFn: () => searchBooksByTitle(q),
    staleTime: 30_000,
    refetchOnMount: 'always' as const,
})

// query functions
export const useBookByWorkId = (workId: string) => {
    return useQuery({
        queryKey: booksQueryKeys.byWorkId(workId),
        queryFn: () => fetchBookByWorkId(workId),
        enabled: !!workId,
    })
}


