import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

// env server (server-only secrets)
export const envServer = createEnv({
    server: {
        SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, 'SUPABASE_SERVICE_ROLE_KEY is required'),
        DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'),
        OPEN_LIBRARY_BASE_URL: z.string().min(1, 'OPEN_LIBRARY_BASE_URL is required'),
        COVERS_BASE_URL: z.string().min(1, 'COVERS_BASE_URL is required'),
        GROWTHBOOK_API_HOST: z.string().optional(),
        GROWTHBOOK_SERVER_KEY: z.string().optional(),
        GROWTHBOOK_CLIENT_KEY: z.string().optional(),
    },
    runtimeEnv: {
        SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
        DATABASE_URL: process.env.DATABASE_URL,
        OPEN_LIBRARY_BASE_URL: process.env.OPEN_LIBRARY_BASE_URL,
        COVERS_BASE_URL: process.env.COVERS_BASE_URL,
        GROWTHBOOK_API_HOST: process.env.GROWTHBOOK_API_HOST,
        GROWTHBOOK_SERVER_KEY: process.env.GROWTHBOOK_SERVER_KEY,
        GROWTHBOOK_CLIENT_KEY: process.env.GROWTHBOOK_CLIENT_KEY,
    },
})


