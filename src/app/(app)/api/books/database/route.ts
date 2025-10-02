import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/pkg/libraries/supabase'

// GET /api/books/database - Get books from Supabase database
export async function GET(request: NextRequest) {
    try {
        const supabase = createServerClient()

        // Fetch books from Supabase
        const { data: books, error } = await supabase
            .from('books')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            return NextResponse.json(
                { error: 'Failed to fetch books from database' },
                { status: 500 }
            )
        }

        return NextResponse.json({ books }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

// POST /api/books/database - Add new book to Supabase database
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { title, author } = body

        if (!title || !author) {
            return NextResponse.json(
                { error: 'Title and author are required' },
                { status: 400 }
            )
        }

        const supabase = createServerClient()

        // Insert new book into Supabase
        const { data: book, error } = await supabase
            .from('books')
            .insert([{ title, author }])
            .select()
            .single()

        if (error) {
            return NextResponse.json(
                { error: 'Failed to add book to database' },
                { status: 500 }
            )
        }

        return NextResponse.json({ book }, { status: 201 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
