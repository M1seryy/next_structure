import { supabase } from '@/pkg/integrations/supabase'

export interface IDatabaseBook {
    id: string
    title: string
    author: string
    created_at: string
}

export async function fetchBooksFromDatabase(): Promise<IDatabaseBook[]> {
    const { data: books, error } = await supabase
        .from('books')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) throw new Error(`Database error: ${error.message}`)
    return books || []
}
