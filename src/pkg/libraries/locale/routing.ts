import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'uk'],

    defaultLocale: 'en',


    pathnames: {

        '/': '/',
        '/book-list': '/book-list',
        '/book/[id]': '/book/[id]',
        '/about': '/about',
        '/contact': '/contact'
    }
})

export type Locale = (typeof routing.locales)[number]
