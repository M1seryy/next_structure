import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { db } from '../../integrations/supabase/drizzle.server'
import { users, sessions, accounts } from '../../integrations/supabase/schemas/users.schema'
import { envServer } from '@/config/env/env.server'
import { envClient } from '@/config/env/env.client'

export const auth = betterAuth({
    baseURL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    database: drizzleAdapter(db, {
        provider: 'pg',
        schema: {
            users,
            sessions,
            accounts,
        },
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        },
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7, // 7 days
        updateAge: 60 * 60 * 24, // 1 day
    },
    trustedOrigins: [
        envClient.NEXT_PUBLIC_APP_URL || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    ],
})

export type Session = typeof auth.$Infer.Session
