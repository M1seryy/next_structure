
import { notFound } from 'next/navigation'
import * as Sentry from '@sentry/nextjs'
import { QueryFunctionContext } from '@tanstack/react-query'

import { type IBooksListItem, type IOpenLibraryBook } from '../../models/book.model'
import { restApiFetcher } from '@/pkg/libraries/rest-api'
import { externalRestApiFetcher } from '@/pkg/libraries/rest-api/fetcher'
import { env } from '@/config/env'

// api book by id
export const bookByIdQueryApi = async (opt: QueryFunctionContext, queryParams: { id: string }) => {
    const { id } = queryParams
    const cleanWorkId = id.startsWith('/works/') ? id.replace('/works/', '') : id

    try {
        const url = `${env.OPEN_LIBRARY_BASE_URL}/works/${encodeURIComponent(cleanWorkId)}.json`
        const res = await externalRestApiFetcher
            .get<IOpenLibraryBook>(url, {
                signal: opt.signal,
                cache: 'force-cache',
                next: { revalidate: 30 },
            })
            .json()

        if (!res) {
            throw new Error(`Book not found: id=${cleanWorkId}`)
        }

        return res
    } catch (error) {
        Sentry.withScope((scope) => {
            scope.setTag('api', 'bookByIdQueryApi')
            Sentry.captureException(error)
        })

        return notFound()
    }
}

// api search 
export const popularBooksQueryApi = async (opt: QueryFunctionContext) => {
    try {
        const res = await restApiFetcher
            .get<{ items: IBooksListItem[] }>('api/books/search', {
                signal: opt.signal,
                cache: 'force-cache',
                next: { revalidate: 30 },
            })
            .json()

        if (!res) {
            throw new Error(`Error occurred, popular books not found`)
        }

        const items = Array.isArray(res.items) ? res.items : []

        return items.map((item) => ({
            id: item.id,
            title: item.title,
            author: item.author,
            coverUrl: item.coverUrl,
            year: item.year,
        }))
    } catch (error) {
        Sentry.withScope((scope) => {
            scope.setTag('api', 'popularBooksQueryApi')
            Sentry.captureException(error)
        })

        return notFound()
    }
}

// api popular books
export const searchBooksQueryApi = async (opt: QueryFunctionContext, queryParams: { q: string }) => {
    const { q } = queryParams
    const searchQuery = (q && q.trim()) || 'popular books'

    try {
        const res = await restApiFetcher
            .get<{ items: IBooksListItem[] }>('api/books/search', {
                signal: opt.signal,
                searchParams: { q: searchQuery },
                cache: 'force-cache',
                next: { revalidate: 30 },
            })
            .json()

        if (!res) {
            throw new Error(`Error occurred, search results not found`)
        }

        const items = Array.isArray(res.items) ? res.items : []

        return items.map((item) => ({
            id: item.id,
            title: item.title,
            author: item.author,
            coverUrl: item.coverUrl,
            year: item.year,
        }))
    } catch (error) {
        Sentry.withScope((scope) => {
            scope.setTag('api', 'searchBooksQueryApi')
            Sentry.captureException(error)
        })

        return notFound()
    }
}