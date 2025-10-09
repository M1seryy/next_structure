import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

// env server (server-only secrets)
export const envServer = createEnv({
    server: {
        SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, 'SUPABASE_SERVICE_ROLE_KEY is required'),
        OPEN_LIBRARY_BASE_URL: z.string().optional(),
    },
    runtimeEnv: {
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
        OPEN_LIBRARY_BASE_URL: process.env.OPEN_LIBRARY_BASE_URL,
    },
})


