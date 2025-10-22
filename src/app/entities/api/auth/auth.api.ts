import { createAuthClient } from 'better-auth/react'
import { envClient } from '@/config/env/env.client'

const authClient = createAuthClient({
    baseURL: envClient.NEXT_PUBLIC_APP_URL,
})

export const authApi = {
    async signInWithGoogle() {
        return await authClient.signIn.social({
            provider: 'google',
            callbackURL: typeof window !== 'undefined' ? window.location.origin : envClient.NEXT_PUBLIC_APP_URL,
        })
    },

    async signOut() {
        return await authClient.signOut()
    },

    async getSession() {
        return await authClient.getSession()
    },
}
