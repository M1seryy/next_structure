import ky, { type KyInstance } from 'ky'
import { env } from '@/config/env/index'

// fetcher
export const restApiFetcher: KyInstance = ky.create({
    prefixUrl: env.CLIENT_API_URL,
    credentials: 'include',
    throwHttpErrors: false,
    hooks: {
        beforeRequest: [
            (request) => {
                if (typeof window === 'undefined' && request.url.startsWith('/')) {
                    const fullUrl = new URL(request.url, env.CLIENT_API_URL).toString()
                    return new Request(fullUrl, request)
                }
                return request
            }
        ]
    }
})
