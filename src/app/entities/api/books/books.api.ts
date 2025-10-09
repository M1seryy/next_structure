
import { type IBooksListItem, type IOpenLibraryBook } from '../../models/book.model'
import { restApiFetcher } from '@/pkg/libraries/rest-api'
import { sentryUtils } from '@/pkg/integrations/sentry'

export async function fetchBookByWorkId(workId: string): Promise<IOpenLibraryBook> {
    const cleanWorkId = workId.startsWith('/works/') ? workId.replace('/works/', '') : workId

    try {
        const res = await restApiFetcher.get<IOpenLibraryBook>(`api/books/${cleanWorkId}`, {
            cache: 'force-cache',
            next: { revalidate: 30 },
        }).json()

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