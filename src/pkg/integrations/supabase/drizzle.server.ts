import 'server-only'
import 'dotenv/config'
import { envServer } from '@/config/env/env.server'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

const client = postgres(envServer.DATABASE_URL, {
    max: 10,
    ssl: { rejectUnauthorized: false },
    prepare: false,
})

export const db = drizzle(client)


