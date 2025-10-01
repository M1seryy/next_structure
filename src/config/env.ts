// Environment configuration
export const env = {
    // API Configuration
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
    CLIENT_API_URL: process.env.NEXT_PUBLIC_CLIENT_API_URL || 'http://localhost:3000',
    OPEN_LIBRARY_BASE_URL: process.env.OPEN_LIBRARY_BASE_URL || 'https://openlibrary.org',

    // Cache Configuration
    CACHE_REVALIDATE_TIME: parseInt(process.env.CACHE_REVALIDATE_TIME || '3600'),
    CACHE_MAX_AGE: parseInt(process.env.CACHE_MAX_AGE || '3600'),
    CACHE_STALE_WHILE_REVALIDATE: parseInt(process.env.CACHE_STALE_WHILE_REVALIDATE || '86400'),

    // App Configuration
    APP_NAME: process.env.NEXT_PUBLIC_APP_NAME || 'Book Store',
    APP_DESCRIPTION: process.env.NEXT_PUBLIC_APP_DESCRIPTION || 'Best books for all tastes and ages',

    // Contact Information
    CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@bookstore.com',
    CONTACT_PHONE: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+380 50 123 4567',
    CONTACT_LOCATION: process.env.NEXT_PUBLIC_CONTACT_LOCATION || 'Kyiv, Ukraine',
} as const
