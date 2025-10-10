
import { type IBooksListItem, type IOpenLibraryBook } from '../../models/book.model'
import { restApiFetcher } from '@/pkg/libraries/rest-api'
import { externalRestApiFetcher } from '@/pkg/libraries/rest-api/fetcher'
import { env } from '@/config/env'
import { sentryUtils } from '@/pkg/integrations/sentry'

export async function fetchBookByWorkId(workId: string): Promise<IOpenLibraryBook> {
    const cleanWorkId = workId.startsWith('/works/') ? workId.replace('/works/', '') : workId

    try {
        const url = `${env.OPEN_LIBRARY_BASE_URL}/works/${encodeURIComponent(cleanWorkId)}.json`
        const response = await externalRestApiFetcher.get(url, {
            cache: 'force-cache',
            next: { revalidate: 30 },
        })

        if (response.status === 404) {
            throw new Error('Book not found')
        }

        if (!response.ok) {
            throw new Error('Failed to fetch from Open Library')
        }

        const res = await response.json() as IOpenLibraryBook

        if (!res) {
            throw new Error('Error occurred, book not found')
        }

        return res
    } catch (error) {
        sentryUtils.captureError(error as Error, {
            function: 'fetchBookByWorkId',
            workId: cleanWorkId
        })
        throw new Error(`Failed to fetch book: ${error}`)
    }
}

export async function fetchPopularBooks(): Promise<IBooksListItem[]> {
    try {
        const data = await restApiFetcher.get<{ items: IBooksListItem[] }>('api/books/search').json()

        const items = Array.isArray(data.items) ? data.items : []

        return items.map((item) => ({
            id: item.id,
            title: item.title,
            author: item.author,
            coverUrl: item.coverUrl,
            year: item.year,
        }))
    } catch (error) {
        sentryUtils.captureError(error as Error, {
            function: 'fetchPopularBooks'
        })
        return []
    }
}

export async function searchBooksByTitle(title: string): Promise<IBooksListItem[]> {
    try {
        const searchQuery = (title && title.trim()) || 'popular books'

        const data = await restApiFetcher.get<{ items: IBooksListItem[] }>('api/books/search', {
            searchParams: { q: searchQuery }
        }).json()

        const items = Array.isArray(data.items) ? data.items : []

        return items.map((item) => ({
            id: item.id,
            title: item.title,
            author: item.author,
            coverUrl: item.coverUrl,
            year: item.year,
        }))
    } catch (error) {
        sentryUtils.captureError(error as Error, {
            function: 'searchBooksByTitle',
            searchQuery: title
        })
        return []
    }
}