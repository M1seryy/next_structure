import 'server-only'
import { envServer } from '@/config/env/env.server'
import SupabaseManager from './supabase.manager'

export const createServerClient = () => {
    // ensure manager uses validated env
    return SupabaseManager.getClient()
}

export { SupabaseManager }


