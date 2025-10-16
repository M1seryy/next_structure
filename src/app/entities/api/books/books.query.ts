import { useQuery } from '@tanstack/react-query'
import { QueryFunctionContext } from '@tanstack/react-query'

import { bookByIdQueryApi, searchBooksQueryApi } from './books.api'

// query keys
export const booksQueryKeys = {
    all: ['books'] as const,
    byWorkId: (workId: string) => [...booksQueryKeys.all, 'work', workId] as const,
    search: (title: string) => [...booksQueryKeys.all, 'search', title] as const,
}


export const booksListQueryOptions = (q: string) => ({
    queryKey: ['books', q],
    queryFn: (opt: QueryFunctionContext) => searchBooksQueryApi(opt, { q }),
    staleTime: 30_000,
    gcTime: 5 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
})


export const useBookByWorkId = (workId: string) => {
    return useQuery({
        queryKey: booksQueryKeys.byWorkId(workId),
        queryFn: (opt: QueryFunctionContext) => bookByIdQueryApi(opt, { id: workId }),
        enabled: !!workId,
        staleTime: 30_000,
        gcTime: 5 * 60 * 1000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })
}

export const useSearchBooks = (query: string) => {
    return useQuery(booksListQueryOptions(query))
}


