import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/pkg/integrations/drizzle/drizzle.server'
import { books } from '@/pkg/integrations/drizzle/schemas/books.schema'
import { desc } from 'drizzle-orm'

export async function GET(_request: NextRequest) {
    try {
        const rows = await db.select().from(books).orderBy(desc(books.createdAt))
        return NextResponse.json({ books: rows }, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to fetch books from database' },
            { status: 500 }
        )
    }
}

