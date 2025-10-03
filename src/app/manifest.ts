import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Book Store',
        short_name: 'Book Store',
        description: 'Best books for all tastes and ages',
        start_url: '/',
        display: 'standalone',

    }
}
