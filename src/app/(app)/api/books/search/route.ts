import { NextRequest, NextResponse } from 'next/server'

// constants
const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org'

// GET /api/books/search?q=harry+potter
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const q = searchParams.get('q') || 'harry potter'

        // Fetch from Open Library API
        const openLibraryUrl = `${OPEN_LIBRARY_BASE_URL}/search.json?q=${encodeURIComponent(q)}&limit=20`

        const response = await fetch(openLibraryUrl, {
            next: { revalidate: 30 },
        })

        if (!response.ok) {
            return NextResponse.json({ items: [] }, { status: 200 })
        }

        const data = await response.json()

        // Transform Open Library data to our format
        const items = (data.docs || []).map((doc: any, index: number) => ({
            id: doc.key || `book-${index}`,
            title: doc.title || 'Без назви',
            author: doc.author_name?.[0] || 'Невідомий автор',
            coverUrl: doc.cover_i
                ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
                : undefined,
            year: doc.first_publish_year || undefined,
        }))

        return NextResponse.json({ items })
    } catch (error) {
        console.error('Books search error:', error)
        return NextResponse.json({ items: [] }, { status: 200 })
    }
}
