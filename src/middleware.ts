import createMiddleware from 'next-intl/middleware'
import { routing } from './pkg/libraries/locale/routing'

export default createMiddleware(routing)

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(uk|en)/:path*']
}
