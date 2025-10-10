import ky, { type KyInstance } from 'ky'

// External fetcher without prefixUrl for absolute URLs (e.g., Open Library)
export const externalRestApiFetcher: KyInstance = ky.create({
    credentials: 'include',
    throwHttpErrors: false,
})


