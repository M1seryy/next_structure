import { QueryFunctionContext } from '@tanstack/react-query'

import { databaseBooksQueryApi } from './database.api'

// query options
export const databaseBooksQueryOptions = () => ({
    queryKey: ['database', 'books'],
    queryFn: (opt: QueryFunctionContext) => databaseBooksQueryApi(opt),
})
