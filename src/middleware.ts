import { routing } from '@/pkg/libraries/locale/routing'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware(routing)

export const config = {
    matcher: ['/((?!api|_next|.*\\..*).*)']
}