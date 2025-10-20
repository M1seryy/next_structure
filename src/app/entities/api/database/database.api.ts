import { QueryFunctionContext } from '@tanstack/react-query'
import { db } from '@/pkg/integrations/supabase/drizzle.server'
import { books as booksTable, type BookRow } from '@/pkg/integrations/supabase/schemas/books.schema'
import { desc } from 'drizzle-orm'

// interface
export interface IDatabaseBook {
    id: string
    title: string
    author: string | null
    description: string | null
    created_at: string | null
}


export const databaseBooksQueryApi = async (opt: QueryFunctionContext) => {
    try {
        const rows: BookRow[] = await db
            .select()
            .from(booksTable)
            .orderBy(desc(booksTable.createdAt))

        return (rows || []).map((row) => ({
            id: row.id,
            title: row.title,
            author: row.author ?? null,
            description: row.description ?? null,
            created_at: row.createdAt ? row.createdAt.toISOString() : null,
        }))
    } catch (err: unknown) {
        const message = err instanceof Error ? err.message : String(err)
        throw new Error(`Database query failed: ${message}`)
    }
}
