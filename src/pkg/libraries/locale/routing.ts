import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'uk'],
    localePrefix: 'always',
    localeDetection: false,
    defaultLocale: 'en'
})

export type ILocale = (typeof routing.locales)[number]
