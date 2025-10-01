import ky, { type KyInstance } from 'ky'
import { env } from '@/config/env'

// fetcher
export const restApiFetcher: KyInstance = ky.create({
    prefixUrl: env.CLIENT_API_URL,
    credentials: 'include',
    throwHttpErrors: false,
})
