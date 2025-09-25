import { type FC } from 'react'

import { BooksListItem } from '../../models/book.model'

// constants
const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org'

// functions
export async function fetchBookByWorkId(workId: string) {
    const res = await fetch(`${OPEN_LIBRARY_BASE_URL}/works/${workId}.json`, {
        next: { revalidate: 30 },
    })
    return res.json()
}

export async function searchBooksByTitle(title: string): Promise<BooksListItem[]> {
    const baseUrl = 'http://localhost:3000'

    const url = new URL(`${baseUrl}/api/books/search`)
    url.searchParams.set('q', (title && title.trim()) || 'harry potter')

    const res = await fetch(url.toString(), { next: { revalidate: 30 } })
    if (!res.ok) return [] as BooksListItem[]
    const data = await res.json()

    const items = Array.isArray(data.items) ? (data.items as BooksListItem[]) : []
    return items.map((item) => ({
        id: item.id,
        title: item.title,
        author: item.author,
        coverUrl: item.coverUrl,
        year: item.year,
    }))
}
