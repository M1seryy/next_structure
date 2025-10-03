import { envClient } from './env.client'

export const env = {
    API_BASE_URL: envClient.NEXT_PUBLIC_API_BASE_URL,
    CLIENT_API_URL: envClient.NEXT_PUBLIC_CLIENT_API_URL,
    OPEN_LIBRARY_BASE_URL: process.env.OPEN_LIBRARY_BASE_URL || 'https://openlibrary.org',
} as const

export { envClient } from './env.client'
