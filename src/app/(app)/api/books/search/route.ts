import { NextRequest, NextResponse } from 'next/server'

// constants
const OPEN_LIBRARY_BASE_URL = 'https://openlibrary.org'

// GET /api/books/search?q=
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const q = searchParams.get('q') || 'popular books'

        const openLibraryUrl = `${OPEN_LIBRARY_BASE_URL}/search.json?q=${encodeURIComponent(q)}&limit=20`

        const response = await fetch(openLibraryUrl, {
            next: { revalidate: 3600 },
        })

        if (!response.ok) {
            console.error('Open Library API error:', response.status, response.statusText)
            return NextResponse.json({ items: [] }, { status: 200 })
        }

        const data = await response.json()

        const items = (data.docs || []).map((doc: any, index: number) => {
            const workId = doc.key ? doc.key.replace('/works/', '') : `book-${index}`


            return {
                id: workId,
                title: doc.title || 'No Title',
                author: doc.author_name?.[0] || 'Unknown Author',
                coverUrl: doc.cover_i
                    ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`
                    : undefined,
                year: doc.first_publish_year || undefined,
            }
        })

        // return response with caching headers
        return NextResponse.json(
            { items },
            {
                status: 200,
            }
        )
    } catch (error) {
        console.error('API route error:', error)
        return NextResponse.json({ items: [] }, { status: 200 })
    }
}

