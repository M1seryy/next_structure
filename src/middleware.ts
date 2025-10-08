import createMiddleware from 'next-intl/middleware'
import { routing } from './pkg/libraries/locale/routing'

export default createMiddleware(routing)

export const config = {
    matcher: ['/', '/(uk|en)/:path*', '/book-list', '/book/:path*']
}
