
import ky from 'ky'
import { type IBooksListItem, type IOpenLibraryBook } from '../../models/book.model'
import { restApiFetcher } from '@/pkg/libraries/rest-api'
import { sentryUtils } from '@/pkg/integrations/sentry'

// constants
const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org'

export async function fetchBookByWorkId(workId: string): Promise<IOpenLibraryBook> {
    const cleanWorkId = workId.startsWith('/works/') ? workId.replace('/works/', '') : workId

    try {
        const data = await ky.get(`${OPEN_LIBRARY_BASE_URL}/works/${cleanWorkId}.json`).json()
        return data as IOpenLibraryBook
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
        const data = await restApiFetcher.get('api/books/search').json() as { items: IBooksListItem[] }

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
        const data = await restApiFetcher.get('api/books/search', {
            searchParams: { q: searchQuery }
        }).json() as { items: IBooksListItem[] }

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