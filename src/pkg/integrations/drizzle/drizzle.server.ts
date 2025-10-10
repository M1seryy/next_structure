import 'server-only'
import 'dotenv/config'
import { envServer } from '@/config/env/env.server'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

// Ensure sslmode=require is present on the connection string for cloud Postgres providers
const baseUrl = envServer.DATABASE_URL
const url = baseUrl.includes('sslmode=')
    ? baseUrl
    : (baseUrl.includes('?') ? `${baseUrl}&sslmode=require` : `${baseUrl}?sslmode=require`)

const client = postgres(url, {
    max: 10,
    // For Supabase TLS, explicitly disable cert verification to avoid local CA issues
    ssl: { rejectUnauthorized: false },
    // Disable prepared statements for PgBouncer transaction mode (Supabase pool)
    prepare: false,
})

export const db = drizzle(client)


