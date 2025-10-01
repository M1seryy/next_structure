
import ky from 'ky'
import { BooksListItem, type OpenLibraryBook } from '../../models/book.model'
import { restApiFetcher } from '@/pkg/libraries/rest-api'
import { sentryUtils } from '@/pkg/libraries/sentry'

// constants
const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org'

// fetch single book 
export async function fetchBookByWorkId(workId: string): Promise<OpenLibraryBook> {
    const cleanWorkId = workId.startsWith('/works/') ? workId.replace('/works/', '') : workId

    try {
        const data = await ky.get(`${OPEN_LIBRARY_BASE_URL}/works/${cleanWorkId}.json`).json()
        return data as OpenLibraryBook
    } catch (error) {
        sentryUtils.captureError(error as Error, {
            function: 'fetchBookByWorkId',
            workId: cleanWorkId
        })
        throw new Error(`Failed to fetch book: ${error}`)
    }
}

// fetch popular books 
export async function fetchPopularBooks(): Promise<BooksListItem[]> {
    try {
        const data = await restApiFetcher.get('api/books/search').json() as { items: BooksListItem[] }


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
        console.error('Failed to fetch popular books:', error)
        return []
    }
}

// search books by title
export async function searchBooksByTitle(title: string): Promise<BooksListItem[]> {
    try {
        const searchQuery = (title && title.trim()) || 'popular books'
        const data = await restApiFetcher.get('api/books/search', {
            searchParams: { q: searchQuery }
        }).json() as { items: BooksListItem[] }


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
        console.error('Failed to search books:', error)
        return []
    }
}
