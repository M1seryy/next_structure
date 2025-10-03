import { NextRequest, NextResponse } from 'next/server'
import SupabaseManager from '@/pkg/integrations/supabase/supabase.manager'

export async function GET(request: NextRequest) {
    try {
        const supabase = SupabaseManager.getClient()

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

