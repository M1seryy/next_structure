
import { BooksListItem, type OpenLibraryBook } from '../../models/book.model'

// constants
const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org'

// fetch single book by work ID from Open Library API
export async function fetchBookByWorkId(workId: string): Promise<OpenLibraryBook> {
    // Ensure workId doesn't already contain /works/ prefix
    const cleanWorkId = workId.startsWith('/works/') ? workId.replace('/works/', '') : workId

    const res = await fetch(`${OPEN_LIBRARY_BASE_URL}/works/${cleanWorkId}.json`, {
        cache: 'force-cache',
        next: { revalidate: 30 },
    })

    if (!res.ok) {
        throw new Error(`Failed to fetch book: ${res.status}`)
    }

    return res.json()
}

// fetch popular books using search endpoint (defaults to popular books)
export async function fetchPopularBooks(): Promise<BooksListItem[]> {
    const res = await fetch('/api/books/search', { next: { revalidate: 30 }, cache: 'force-cache' })
    if (!res.ok) return [] as BooksListItem[]
    const data = await res.json()

    // transform and validate response data
    const items = Array.isArray(data.items) ? (data.items as BooksListItem[]) : []
    return items.map((item) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        coverUrl: item.coverUrl,
        year: item.year,
    }))
}

// search books by title using internal API endpoint
export async function searchBooksByTitle(title: string): Promise<BooksListItem[]> {
    const url = new URL('/api/books/search', window.location.origin)
    url.searchParams.set('q', (title && title.trim()) || 'popular books')

    const res = await fetch(url.toString(), { next: { revalidate: 30 }, cache: 'force-cache' })
    if (!res.ok) return [] as BooksListItem[]
    const data = await res.json()

    // transform and validate response data
    const items = Array.isArray(data.items) ? (data.items as BooksListItem[]) : []
    return items.map((item) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        coverUrl: item.coverUrl,
        year: item.year,
    }))
}
