import type { Config } from 'drizzle-kit'
import * as path from 'path'
import { config as loadEnv } from 'dotenv'

// Load environment variables from .env first, then .env.local (if present)
loadEnv()
loadEnv({ path: '.env.local' })

export default {
    out: './src/pkg/integrations/supabase/drizzle',
    schema: './src/pkg/integrations/supabase/schemas/**/*.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true,
} satisfies Config


