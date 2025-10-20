import { useQuery } from '@tanstack/react-query'
import { QueryFunctionContext } from '@tanstack/react-query'

import { databaseBooksQueryApi } from './database.api'

// query keys
export const databaseQueryKeys = {
    all: ['database'] as const,
    books: () => [...databaseQueryKeys.all, 'books'] as const,
}

// query options
export const databaseBooksQueryOptions = () => ({
    queryKey: databaseQueryKeys.books(),
    queryFn: (opt: QueryFunctionContext) => databaseBooksQueryApi(opt),
    staleTime: 30_000,
    gcTime: 5 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
})

// hooks
export const useDatabaseBooks = () => {
    return useQuery(databaseBooksQueryOptions())
}
